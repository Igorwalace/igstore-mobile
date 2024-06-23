import React from 'react'
import { Text, View } from 'react-native'

//helps
import Help_Products from '../help-products';

const Sub_Description_Product = () => {

    const { product } = Help_Products()

    return (
        <View className='space-y-1' >
            <View className='flex-row gap-2' >
                <Text className='text-light_gray text-xs capitalize' >{product.time}</Text>
                <Text className='text-light_gray text-xs capitalize' >|</Text>
                <Text className='text-light_gray text-xs' >{product.quant} disponíveis</Text>
            </View>
            <View className='space-y-1' >
                <Text className='text-white text-xl' >{product.title}</Text>
                <Text className={`${product.quant > 0 ? 'text-main' : 'text-red'} text-sm font-bold`} >
                    {
                        product.quant > 0 
                        ?
                        'Disponível em estoque'
                        :
                        'Indisponível em estoque'
                    }
                </Text>
            </View>
        </View>
    )
}

export default Sub_Description_Product