export const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return [...state, action.payload];
    default:
      return state;
  }
};
