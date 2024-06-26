import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'

//icons
import { AntDesign } from '@expo/vector-icons';
import { Product } from '../../../heps/tsx';

//functions
import { Discount } from '../../../heps/discount';
import { useNavigation } from '@react-navigation/native';

interface Products {
    product: Product
}

const Products = ({ product }: Products) => {

    const navigation: any = useNavigation();

    const handleProductSingle = () => {
        navigation.navigate('Product Single', { product })
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={handleProductSingle} className='mx-1' >
            <View className='w-[155px] h-[170px] bg-dark_gray rounded-xl items-center justify-center relative' >
                <Image
                    className='w-[94px] h-[80px]'
                    source={{ uri: product.img_main }}
                />
                <View className={`${product.discount === null && 'hidden'} absolute top-2 left-2 items-center flex-row justify-around bg-main p-2 rounded-xl`} >
                    <AntDesign name="arrowdown" size={12} color="white" />
                    <Text className='text-white text-[10px] font-extrabold ml-1' >{product.discount}%</Text>
                </View>
                <View className={`${product.quant != 0 && 'hidden'} absolute bottom-2 right-1 left-1 items-center flex-row justify-center rounded-xl`} >
                    <Text className='text-red text-xs font-extrabold' >Indisponível</Text>
                </View>
            </View>
            <View className='p-2' >
                <Text className={`text-white text-xs ${product.quant === 0 && 'line-through'}`} >{product.title}</Text>
                <View className='flex-row items-center justify-start gap-1' >
                    <Text className='text-white text-sm font-extrabold' >R${Discount(product.price, product.discount).replace('.', ',')}</Text>
                    <Text className={`text-white text-[10px] font-normal line-through ${product.discount === null && 'hidden'}`} >R${product.price.toFixed(2).replace('.', ',')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Products