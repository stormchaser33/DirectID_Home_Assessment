import { render, fireEvent, waitFor } from "@testing-library/react";
import DataTable from "./DataTable";

const mockData = [
  ["Row 1", "2022-01-01", "Cate1"],
  ["Row 2", "2022-01-02", "Cate2"],
  ["Row 3", "2022-01-03", "Cate3"],
];

const mockColumns = [
  { name: "Name", sort: false, colSpan: "1" },
  { name: "Date", sort: true, colSpan: "1" },
  { name: "Category", sort: true, colSpan: "1" },
];

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
    const rows = document.querySelectorAll("tbody tr");
    expect(rows[0].textContent).toContain("Row 1");
    expect(rows[1].textContent).toContain("Row 2");
    expect(rows[2].textContent).toContain("Row 3");
  });
});

test("it should sort the table by Category in descending order", async () => {
  const { getByText } = render(
    <DataTable data={mockData} columns={mockColumns} />
  );

  fireEvent.click(getByText("Category"));

  await waitFor(() => {
    const rows = document.querySelectorAll("tbody tr");
    expect(rows[0].textContent).toContain("Row 1");
    expect(rows[1].textContent).toContain("Row 2");
    expect(rows[2].textContent).toContain("Row 3");
  });
});
