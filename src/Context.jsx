import { Children } from "react";
import { createContext, useState} from "react";

export let CartContext = createContext();

export let CartProvider = ({Children}) =>{
    let [cartItems, setCartItems] = useState([]);

    return(
        <CartContext.Provider val={{cartItems, setCartItems}}>
            {Children}
            </CartContext.Provider>
    )
};