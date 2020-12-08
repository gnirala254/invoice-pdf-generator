const initialState = {
  quantity: "",
  rate: "",
  amount: "",
  tax: "",
  discount: "",
  total: [],
};

export const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUANTITY":
      return {
        ...state,
        quantity: action.payload,
      };
    case "RATE":
      return {
        ...state,
        rate: action.payload,
      };
    case "TAX":
      return {
        ...state,
        tax: action.payload,
      };
    case "DISCOUNT":
      return {
        ...state,
        discount: action.payload,
      };

    default:
      return state;
  }
};
