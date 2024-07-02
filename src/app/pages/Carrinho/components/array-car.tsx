//react
import { useState } from "react";
import { Product } from "../../../heps/tsx";

//helps

const Array_Carrinho = () => {

    const [carrinho, setCarrinho] = useState<Product[]>([])

    return {
        carrinho, setCarrinho
    }
}

export default Array_Carrinho