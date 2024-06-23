import React from 'react'
import { Image, View } from 'react-native'

//helps
import Help_Products from '../help-products'

const Image_Product = () => {

    const { product } = Help_Products()

    return (
        <View className='w-full h-[390px] bg-dark_gray items-center justify-center' >
            <Image
                className='w-[270px] h-[200px]'
                source={{ uri: product.img_main }}
            />
        </View>
    )
}

export default Image_Product