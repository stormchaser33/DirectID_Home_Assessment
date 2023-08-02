export const formatCurrency = (
  countryCode: string,
  currencyCode: string,
  amount: number
): string => {
  try {
    return amount.toLocaleString(`en-${countryCode.toLowerCase()}`, {
      minimumFractionDigits: 2,
      style: "currency",
      currency: currencyCode,
    });
  } catch (error) {
    return amount.toFixed(2);
  }
};

export const dateFormat = (inputDate: string) => {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
};

export const getData = (mockup: any) => {
  let currentBalance = 0;
  const { countryCode } = mockup;
  const { currencyCode, transactions } = mockup.accounts[0];

  const data = transactions.map((transaction: any, index: number) => {
    const {
      creditDebitIndicator,
      amount,
      description,
      bookingDate,
      enrichedData,
    } = transaction;
    const { category } = enrichedData;

    if (creditDebitIndicator === "Debit") {
      currentBalance += amount;
    } else if (creditDebitIndicator === "Credit") {
      currentBalance -= amount;
    }

    return {
      transaction: description,
      date: dateFormat(bookingDate),
      category: category.name,
      debit:
        creditDebitIndicator === "Debit"
          ? formatCurrency(countryCode, currencyCode, amount)
          : "-",
      credit:
        creditDebitIndicator === "Credit"
          ? formatCurrency(countryCode, currencyCode, amount)
          : "-",
      balance:
        index === 0
          ? formatCurrency(countryCode, currencyCode, amount)
          : formatCurrency(countryCode, currencyCode, currentBalance),
    };
  });

  return data;
};
