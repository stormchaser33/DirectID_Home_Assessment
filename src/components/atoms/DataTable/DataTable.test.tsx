import { render, fireEvent, waitFor, within } from "@testing-library/react";
import DataTable from "./DataTable";

const mockData = [
  { name: "Row 1", date: "2022-01-01", category: "Cate1" },
  { name: "Row 2", date: "2022-01-02", category: "Cate2" },
  { name: "Row 3", date: "2022-01-03", category: "Cate3" },
];

const mockColumns = {
  name: { name: "Name", sort: false, colSpan: "1" },
  date: { name: "Date", sort: true, colSpan: "1" },
  category: { name: "Category", sort: true, colSpan: "1" },
};

test("it should render the DataTable", () => {
  const { getByText } = render(
    <DataTable data={mockData} columns={mockColumns} />
  );

  expect(getByText("Row 1")).toBeInTheDocument();
});

test("it should sort the table by Date in ascending order", async () => {
  const { getByText } = render(
    <DataTable data={mockData} columns={mockColumns} />
  );

  fireEvent.click(getByText("Date"));

  await waitFor(() => {
    const rows = document.querySelectorAll("[data-testid='table-row']");
    expect(
      within(rows[0] as HTMLElement).getByText("Row 1")
    ).toBeInTheDocument();
    expect(
      within(rows[1] as HTMLElement).getByText("Row 2")
    ).toBeInTheDocument();
    expect(
      within(rows[2] as HTMLElement).getByText("Row 3")
    ).toBeInTheDocument();
  });
});

test("it should sort the table by Category in descending order", async () => {
  const { getByText } = render(
    <DataTable data={mockData} columns={mockColumns} />
  );

  fireEvent.click(getByText("Category"));

  await waitFor(() => {
    const rows = document.querySelectorAll("[data-testid='table-row']");
    expect(
      within(rows[0] as HTMLElement).getByText("Row 1")
    ).toBeInTheDocument();
    expect(
      within(rows[1] as HTMLElement).getByText("Row 2")
    ).toBeInTheDocument();
    expect(
      within(rows[2] as HTMLElement).getByText("Row 3")
    ).toBeInTheDocument();
  });
});
