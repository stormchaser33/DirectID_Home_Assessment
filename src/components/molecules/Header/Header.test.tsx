import React from "react";
import { render } from "@testing-library/react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const mockData = {
  accountHolderNames: "John Doe",
  accountNumber: "1234567890",
  bankCode: "987654321",
  balance: "1000",
};

test("it should render the Header", () => {
  const { getByText } = render(<Header data={mockData} />);

  expect(getByText("John Doe")).toBeInTheDocument();
  expect(getByText("account_number: 1234567890")).toBeInTheDocument();
  expect(getByText("branch_code: 987654321")).toBeInTheDocument();
  expect(getByText("balance")).toBeInTheDocument();
  expect(getByText("1000")).toBeInTheDocument();
});

test("it should render the translated text for user transactions", () => {
  const { getByText } = render(<Header data={mockData} />);

  expect(getByText("user_transactions")).toBeInTheDocument();
});
