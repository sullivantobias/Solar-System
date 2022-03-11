import { AnimatePresence } from "framer-motion";

import planets from "../utils/js/planets";

import Header from "../components/header/header";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    const isBackDisplayed = Object.keys(pageProps).length !== 0;

    return <>
      <Header planets={ planets }
              isBackDisplayed={ isBackDisplayed } />
        <AnimatePresence
            exitBeforeEnter
            initial={ false }
            onExitComplete={() => window.scrollTo(0, 0)}>
            <Component {...pageProps} />;
        </AnimatePresence>
    </>
}

export default MyApp;
