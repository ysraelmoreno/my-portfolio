import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ModalProvider } from "../context/ModalContext";
const auth = `Bearer ${process.env.NEXT_PUBLIC_DATO_TOKEN}`;

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_DATO_URL || "",
  cache: new InMemoryCache(),
  headers: {
    Authorization: auth,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ApolloProvider> 
  );
}

export default MyApp;
