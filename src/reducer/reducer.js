import * as t from "./action";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case t.SET_QUERY:
      return { ...state, query: payload };

    default:
      return state;
  }
};

export default reducer;
