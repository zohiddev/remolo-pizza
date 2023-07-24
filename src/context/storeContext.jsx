import { createContext } from "react";
import {store} from '../redux/Oldstore';


const StoreContext = createContext();

function StoreProvider(props){

    const { children } = props;

    return(
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )

         

    
}

export {StoreContext, StoreProvider};

