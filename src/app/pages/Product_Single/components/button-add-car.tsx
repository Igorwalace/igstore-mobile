import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Help_Products from '../help-products'

const Button_Add_Car = () => {

    const { product } = Help_Products()

    return (
        <View>
            <TouchableOpacity disabled={product.quant === 0} activeOpacity={0.9} className={`${product.quant === 0 ? 'bg-[#ccc]' : 'bg-main'} p-3 w-full rounded-xl`} >
                <Text className='text-white text-center font-extrabold uppercase' >
                    {
                        product.quant === 0 ? 
                        'Indisponível'
                        :
                        'Adicionar no carrinho'
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button_Add_Car