import React, { useReducer } from "react";
import reducer from "../reducer/reducer";

export const SearchContext = React.createContext([{}, () => {}]);

const SearchContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    query: "",
  });

  return (
    <SearchContext.Provider value={[state, dispatch]}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
