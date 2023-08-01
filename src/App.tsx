import "./App.css";
import { Logo } from "./components/molecules/Logo";
import { Container } from "./components/atoms/Container";
import { LangSelect } from "./components/atoms/LangSelect";
import { Header } from "./components/molecules/Header";
import DataTable from "./components/atoms/DataTable/DataTable";
import mockup from "./mock-up/apollo-carter.json";

function App() {
  const columns = [
    {
      name: "Transaction",
      canSort: false,
      colSpan: 2,
    },
    {
      name: "Date",
      canSort: true,
      colSpan: 2,
    },
    {
      name: "Category",
      canSort: true,
      colSpan: 2,
    },
    {
      name: "Debit",
      canSort: false,
      colSpan: 1,
    },
    {
      name: "Credit",
      canSort: false,
      colSpan: 1,
    },
    {
      name: "Balance",
      canSort: false,
      colSpan: 1,
    },
  ];

  const data = mockup.accounts[0].transactions.map((transaction) => {
    return [
      transaction.description,
      transaction.bookingDate,
      transaction.enrichedData.category.name,
      transaction.creditDebitIndicator === "Debit" ? "Debit" : "-",
      transaction.creditDebitIndicator === "Credit" ? "Credit" : "-",
      transaction.amount,
    ];
  });

  return (
    <div className="App">
      <LangSelect />
      <Container>
        <Header />
        <DataTable columns={columns} data={data} />
      </Container>
    </div>
  );
}

export default App;
