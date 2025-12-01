import React ,{useState} from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
const GeneralContext = React.createContext({
    openBuyWindow: (uid) =>{},
    openSellWindow:(uid) =>{},
    closeBuyWindow: () =>{},
});

export const GeneralContextProvider = (props) => {

   const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
   const [selectedStockUID, setSelectedStockUID] = useState("");
   const handleOpenBuyWindow  = (uid) =>{
       setIsBuyWindowOpen(true);
       setIsSellWindowOpen(false);
       setSelectedStockUID(uid);
   }

   const handleOpenSellWindow  = (uid) =>{
       setIsSellWindowOpen(true);
       setIsBuyWindowOpen(false);
       setSelectedStockUID(uid);
   }

   const handleCloseBuyWindow = () => {
       setIsBuyWindowOpen(false);
       setIsSellWindowOpen(false);
       setSelectedStockUID("");
   }

   return (
    <GeneralContext.Provider
        value ={{
            openBuyWindow: handleOpenBuyWindow,
            openSellWindow: handleOpenSellWindow,
            closeBuyWindow: handleCloseBuyWindow
        }}
    >
        {props.children}
        {isBuyWindowOpen && <BuyActionWindow uid= {selectedStockUID}/>}
        {isSellWindowOpen && <SellActionWindow uid= {selectedStockUID}/>}
    </GeneralContext.Provider>

   )
}

export default GeneralContext;
