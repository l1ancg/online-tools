import { AppProps } from "next/app";
import "@/styles/globals.css";
import Header from "@/components/Header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="h-full layout flex-1" style={{ height: `calc(100vh - 150px)` }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
