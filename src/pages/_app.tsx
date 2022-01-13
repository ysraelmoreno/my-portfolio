import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ModalProvider } from "../context/ModalContext";
import GlobalStyles from "../styles/global";
import { ScrollProvider } from "../hooks/useScrollTo";
import { EasterEggsProvider } from "../context/EasterEggsContext";
import EasterEgg from "../components/EasterEgg";
import { ToastProvider } from "../components/Toast/ToastContext";
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
          <ToastProvider>
            <EasterEggsProvider>
              <Component {...pageProps} />
              {EasterEgg && <EasterEgg />}
              <GlobalStyles />
            </EasterEggsProvider>
          </ToastProvider>
        </ModalProvider>
      </ScrollProvider>
    </ApolloProvider>
  );
}

export default MyApp;
