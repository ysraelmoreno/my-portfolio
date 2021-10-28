import { LoadingProvider } from "./contexts/LoadingContext";
import Home from "./pages/Home";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <LoadingProvider>
        <Home />
      </LoadingProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
