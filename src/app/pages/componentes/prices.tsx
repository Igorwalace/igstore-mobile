import React from 'react'
import { Text, View } from 'react-native'
import { Product } from '../../heps/tsx'
import { Discount } from '../../heps/discount'

interface ProductProps {
    product: Product
}

const Prices = ({ product }: ProductProps) => {
    return (
        <View className='flex-row items-center justify-start gap-1' >
            <Text className='text-white text-sm font-extrabold' >R${Discount(product.price, product.discount).replace('.', ',')}</Text>
            <Text className={`text-white text-[10px] font-normal line-through ${product.discount === null && 'hidden'}`} >R${product.price.toFixed(2).replace('.', ',')}</Text>
        </View>
    )
}

export default Prices