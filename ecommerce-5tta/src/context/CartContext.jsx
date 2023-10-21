import { createContext } from "react";

const CartContext = createContext ([])


export const CartContextProvider = ({ children }) => {

    return(
        <CartContext.Provider value={{}}>
        { children }
        </CartContext.Provider>
    )

}
