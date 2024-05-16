import { store } from "@/lib/redux/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../app/globals.css";
import { ModalProvider } from "@/containers/ModalProvder";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </Provider>
  );
}
