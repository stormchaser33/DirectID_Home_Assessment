import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";

type TRowData = Array<string | number>;

type TColumn = {
  name: string;
  sort: boolean;
  colSpan: string;
};

interface IDataTableProp {
  data: Array<TRowData>;
  columns: TColumn[];
}

interface ISortOption {
  name: string;
  status: string;
}

const DataTable: React.FC<IDataTableProp> = ({ columns, data }) => {
  const [sortOption, setSortOptions] = useState<ISortOption>({
    name: "",
    status: "",
  });
  const [displayData, setDisplayData] = useState(data.slice(0, 50));
  const [hasMore, setHasMore] = useState(data.length > 50);
  const [isScrolled, setIsScrolled] = useState(false);

  const tableRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const fetchMoreData = () => {
    if (displayData.length >= data.length) {
      setHasMore(false);
      return;
    }

    // Fetch more data after a delay (to simulate fetching data from an API)
    setTimeout(() => {
      setDisplayData(data.slice(0, displayData.length + 50));
    }, 500);
  };

  const handleSort = (name: string) => {
    const newSortOption = {
      name,
      status:
        sortOption.name === name && sortOption.status === "desc"
          ? "asc"
          : "desc",
    };

    const sortFunc = (a: TRowData, b: TRowData) => {
      let compareA: number | string, compareB: number | string;

      if (name === t("date")) {
        compareA = new Date(a[1]).getTime();
        compareB = new Date(b[1]).getTime();
      } else if (name === t("category")) {
        compareA = a[2] as string;
        compareB = b[2] as string;
      } else {
        return 0;
      }

      return newSortOption.status === "asc"
        ? compareA > compareB
          ? 1
          : -1
        : compareA < compareB
        ? 1
        : -1;
    };

    const newDisplayData = [...displayData].sort(sortFunc);

    setSortOptions(newSortOption);
    setDisplayData(newDisplayData);
  };

  const scrollToTop = () => {
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / (scrollHeight / 100);
    const cosParameter = scrollHeight / 2;
    let scrollCount = 0;
    let scrollMargin;
    let scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        scrollCount = scrollCount + 1;
        scrollMargin =
          cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, scrollHeight - scrollMargin);
      } else clearInterval(scrollInterval);
    }, 5);
  };
  return (
    <>
      <InfiniteScroll
        dataLength={displayData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<></>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="overflow-auto" ref={tableRef}>
          <table className="w-full">
            <thead className="text-left sticky top-0">
              <tr className="bg-tableHeaderBg rounded-lg">
                {columns.map((item, index) => (
                  <th
                    key={"head" + index}
                    className={`py-5 ${item.sort && "cursor-pointer"}`}
                    onClick={
                      item.sort ? () => handleSort(item.name) : undefined
                    }
                  >
                    {item.name}
                    {item.name === sortOption.name
                      ? sortOption.status === "asc"
                        ? "  ↑"
                        : "  ↓"
                      : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayData.map((values, index) => (
                <tr
                  className={`${index % 2 === 1 && "bg-tableRowBg"}`}
                  key={"body" + index}
                >
                  {values.map((val, index) => (
                    <td key={"item" + index}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </InfiniteScroll>
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-md hover:bg-blue-700 transition-colors duration-200 ease-in-out cursor-pointer"
          data-testid="scroll-to-top-button"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default DataTable;
