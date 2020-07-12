import React from "react";
import { ApplicationContextProvider } from "../contexts/AuthenticationContext";

export default ({ Component, pageProps }) => {
  const { foo, ...actualPageProps } = pageProps;

  return (
    <ApplicationContextProvider>
      <Component {...actualPageProps} />
    </ApplicationContextProvider>
  );
};
