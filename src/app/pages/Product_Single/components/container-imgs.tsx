import React from 'react'
import { Image, View } from 'react-native'

//helps
import Help_Products from '../help-products';

const Container_Images = () => {

    const { product } = Help_Products()

    return (
        <View className='bg-black -mt-5 w-full rounded-t-3xl p-7 pt-10' >
            <View className='flex-row gap-4 items-center justify-center' >
                <View className='w-[77px] h-[77px] bg-dark_gray rounded-xl items-center justify-center' >
                    <Image
                        className='w-[57px] h-[43px]'
                        source={{ uri: product.img_main }}
                    />
                </View>
                <View className='w-[77px] h-[77px] bg-dark_gray rounded-xl items-center justify-center' >
                    <Image
                        className='w-[57px] h-[43px]'
                        source={{ uri: product.img_2 }}
                    />
                </View>
                <View className='w-[77px] h-[77px] bg-dark_gray rounded-xl items-center justify-center' >
                    <Image
                        className='w-[57px] h-[43px]'
                        source={{ uri: product.img_3 }}
                    />
                </View>
                <View className='w-[77px] h-[77px] bg-dark_gray rounded-xl items-center justify-center' >
                    <Image
                        className='w-[57px] h-[43px]'
                        source={{ uri: product.img_4 }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Container_Images