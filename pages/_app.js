import { AnimatePresence } from "framer-motion";

import planets from "../utils/js/planets";

import Header from "../components/header/header";

import "../styles/globals.scss";

function MyApp({ Component, pageProps, router }) {
    const isBackDisplayed = Object.keys(pageProps).length !== 0;

    const { asPath } = router

    const planetId = asPath.split("/").pop()

    return <>
      <Header planets={ planets }
              isBackDisplayed={ isBackDisplayed }
              planetId={ planetId } />
        <AnimatePresence>
            <Component {...pageProps} />;
        </AnimatePresence>
    </>
}

export default MyApp;
