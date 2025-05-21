import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CartProvider({children}){
    const[Carrinho, setCarrinho] = useState([]);

    function addCarrinho(produtos){
        setCarrinho((anterior) => [...anterior, produtos]);
    }


    return(
        <CarrinhoContext.Provider value={{Carrinho, addCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )

}

export function useCarrinho(){
    return useContext(CarrinhoContext);
}