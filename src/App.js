import SearchContextProvider from "./contexts/SearchContext";
import Home from "./View/Home/Home";

const App = () => {
  return (
    <SearchContextProvider>
      <Home />
    </SearchContextProvider>
  );
};

export default App;
