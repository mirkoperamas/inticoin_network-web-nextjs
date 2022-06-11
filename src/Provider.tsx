import { useContext } from "react";
import Preloader from "./components/Preloader/Preloader";
import { AjustProvider } from "./contexts/Ajust/AjustProvider";
import { PreloaderContext } from "./contexts/Preloader/PreloaderContext";

declare global {
  interface Window {
    ethereum: any;
    swapExactTokensForTokens: any;
    swapExactNativeCurrencyForTokens: any;
    swapExactTokensForNativeCurrency: any;
  }
}

export const Provider = ({ children }: any) => {
  const { preloader } = useContext(PreloaderContext);

  return (
    <>
      <AjustProvider>
        {children}
        {preloader.preloader && <Preloader />}
      </AjustProvider>
    </>
  );
};
