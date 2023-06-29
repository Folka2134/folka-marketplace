import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { Navbar } from "~/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <div className="text-white">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
}

export default api.withTRPC(MyApp);
