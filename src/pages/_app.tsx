import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ModalProvider } from "../context/ModalContext";
import { ScrollProvider } from "../hooks/useScrollTo";
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
      <ScrollProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ScrollProvider>
    </ApolloProvider>
  );
}

export default MyApp;
