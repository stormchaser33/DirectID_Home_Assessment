export const currencyFormat = (number: number) => {
  let numStr = number.toFixed(2);

  let [integer, decimal] = numStr.split(".");

  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  numStr = integer + "." + decimal;

  numStr = "£" + numStr;

  return numStr;
};

export const dateFormat = (inputDate: string) => {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
};
