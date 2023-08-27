import "./App.css";
import { LangSelect } from "./components/atoms/LangSelect";
import { Header } from "./components/molecules/Header";
import DataTable from "./components/atoms/DataTable/DataTable";
import mockup from "./mock-up/apollo-carter.json";
import { formatCurrency, getData } from "./utils/utils";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  const columns = {
    transaction: {
      name: t("transaction"),
      sort: false,
      colSpan: "w-4/12",
    },
    date: {
      name: t("date"),
      sort: true,
      colSpan: "w-2/12",
    },
    category: {
      name: t("category"),
      sort: true,
      colSpan: "w-1/4",
    },
    debit: {
      name: t("debit"),
      sort: false,
      colSpan: "w-1/12",
    },
    credit: {
      name: t("credit"),
      sort: false,
      colSpan: "w-1/12",
    },
    balance: {
      name: t("balance"),
      sort: false,
      colSpan: "w-1/12",
    },
  };

  const data = getData(mockup);

  const headerData = {
    accountHolderNames: mockup.accounts[0].accountHolderNames,
    accountNumber: mockup.accounts[0].identifiers.accountNumber,
    bankCode: mockup.accounts[0].identifiers.bankCode,
    balance: formatCurrency(
      mockup.countryCode,
      mockup.accounts[0].currencyCode,
      mockup.accounts[0].balances.current.amount
    ),
  };

  return (
    <div className="App">
      <div className="mb-10">
        <LangSelect />
      </div>

      <div className="px-4 lg:px-20 flex flex-col gap-10">
        <Header data={headerData} />
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default App;
