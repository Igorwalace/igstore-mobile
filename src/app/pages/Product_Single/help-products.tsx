import { useRoute } from "@react-navigation/native";
import { Product } from "../../heps/tsx";
import { useEffect, useState } from "react";

const Help_Products = () => {
    
    const route = useRoute();
    const { product } = route.params as { product: Product }

    return {
        product
    }
}

export default Help_Products