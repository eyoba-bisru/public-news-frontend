import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import { NextProgressbarSpinner } from "nextjs-progressbar-spinner";
import AuthRole from "../components/AuthRole";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noAuthRequired = [
    "/",
    "/content/[cname]",
    "/language/[lname]",
    "/location/[loname]",
    "/auth/login",
    "/auth/signup",
    "/search",
    "/detail/[pid]",
    "/weather/weather",
  ];

  return (
    <AuthContextProvider>
      <ChakraProvider>
        <NextProgressbarSpinner
          NextNProgressProps={{
            color: "#A53F2B",
            options: {
              showSpinner: true,
            },
          }}
        />
        {noAuthRequired.includes(router.pathname) ? (
          <AuthRole>
            <Component {...pageProps} />
          </AuthRole>
        ) : (
          <ProtectedRoute>
            <AuthRole>
              <Component {...pageProps} />
            </AuthRole>
          </ProtectedRoute>
        )}
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
