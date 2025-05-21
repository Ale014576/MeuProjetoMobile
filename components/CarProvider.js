import { Children, createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarProvider(){
    const[Carrinho, setCarrinho] = useState([]);

    function addCarrinho(produtos){
        setCarrinho((anterior) => [...anterior, produtos]);
    }


    return(
        <CarrinhoContext.Provider value={{carrinho, addCarrinho}}>
            {Children}
        </CarrinhoContext.Provider>
    )

}

export function useCarrinho(){
    return useContext(CarrinhoContext);
}