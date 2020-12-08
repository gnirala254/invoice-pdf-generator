export const Quantity = (qnt) => ({
  type: "QUANTITY",
  payload: qnt,
});

export const Rate = (rate) => ({
  type: "RATE",
  payload: rate,
});
export const Amount = (amt) => ({
  type: "AMOUNT",
  payload: amt,
});

export const Tax = (tax) => ({
  type: "TAX",
  payload: tax,
});

export const Discount = (discount) => ({
  type: "DISCOUNT",
  payload: discount,
});
