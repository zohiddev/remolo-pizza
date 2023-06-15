let DOLLAR = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (number) => {
  return DOLLAR.format(number);
}
