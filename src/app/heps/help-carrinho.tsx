//react
import { useState } from "react";

//helps
import Help_Products from "./help-products";

const Help_Carrinho = () => {
    
    const { product } = Help_Products()
    const [currentQuant, setCurrentQuant] = useState(1)

    return {
        product, currentQuant, setCurrentQuant
    }
}

export default Help_Carrinho