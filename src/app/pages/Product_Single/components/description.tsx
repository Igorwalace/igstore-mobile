import React from 'react'
import { Text, View } from 'react-native'
import Help_Products from '../help-products'

const Description = () => {

    const { product } = Help_Products()

    return (
        <View>
            <Text className='text-white text-base font-bold pb-2' >Descrição</Text>
            <Text className='text-light_gray' >{product.description}</Text>
        </View>
    )
}

export default Description