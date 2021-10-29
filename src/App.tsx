import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ModalProvider } from "./context/ModalContext";

import Home from "./pages/Home";
import GlobalStyle from "./styles/global";

const auth = `Bearer ${process.env.REACT_APP_DATO_TOKEN}`;

const client = new ApolloClient({
  uri: process.env.REACT_APP_DATO_URL || "",
  cache: new InMemoryCache(),
  headers: {
    Authorization: auth,
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Home />
      </ModalProvider>
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
