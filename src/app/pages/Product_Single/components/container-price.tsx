import React from 'react'
import { Text, View } from 'react-native'

//helps
import Help_Products from '../help-products'

//functions
import { Discount } from '../../../heps/discount'

//icons
import { AntDesign } from '@expo/vector-icons';

const Container_Price = () => {

    const { product } = Help_Products()

    return (
        <View>
            <View className='flex-row items-center justify-start' >
                <Text className='text-white font-extrabold text-[22px]' >R$ {Discount(product.price, product.discount).replace('.', ',')} </Text>
                <View className={`${product.discount === null && 'hidden'} items-center flex-row justify-around bg-main px-2 py-1 rounded-xl`} >
                    <AntDesign name="arrowdown" size={15} color="white" />
                    <Text className='text-white text-sm font-extrabold' >{product.discount}%</Text>
                </View>
            </View>
            <View className={`flex-row gap-1 ${product.discount === null && 'hidden'}`} >
                <Text className='text-gray_two text-sm' >De:</Text>
                <Text className='text-gray_two text-sm line-through' >R$ {product.price.toFixed(2).replace('.',',')}</Text>
            </View>
        </View>
    )
}

export default Container_Price