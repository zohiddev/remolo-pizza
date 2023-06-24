import { createContext } from "react";
import { store } from "../redux/store";

const StoreContext = createContext(store)

function StoreProvider(props) {
   const { children } = props
   return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
   )
}



export { StoreContext, StoreProvider }