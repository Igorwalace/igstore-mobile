import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Prices from '../../componentes/prices'

//icons
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Array_Carrinho from './array-car';

const Products_Car = () => {

    const { carrinho } = Array_Carrinho()

    return (
        <View className='p-3 pt-5' >
            {
                carrinho.length < 1 &&
                <View>
                    <Text className='text-white text-center text-xl' >Nenhum produto adicionado.</Text>
                </View>
            }
            {
                carrinho
                    .map((product) => (
                        <View key={product.id} className='flex-row justify-between p-2' >
                            <View className='flex-row ' >
                                <View className='bg-gray w-[110px] h-[90px] items-center justify-center rounded-xl' >
                                    <Image
                                        className='w-[60px] h-[60px]'
                                        source={{ uri: product.img_main }}
                                    />
                                </View>
                                <View className='px-2' >
                                    <Text className='text-white text-sm' >{product.title}</Text>
                                    <Prices product={product} />
                                    <View className='flex-row items-center py-2' >
                                        <TouchableOpacity disabled={product.quant === 0} activeOpacity={0.8} className='border-2 border-gray p-2 items-center justify-center rounded-md' >
                                            <MaterialIcons name="arrow-back-ios-new" size={15} color="white" />
                                        </TouchableOpacity>
                                        <View className='' >
                                            <Text className='text-white text-center text-sm w-7' >5</Text>
                                        </View>
                                        <TouchableOpacity disabled={product.quant === 0} activeOpacity={0.8} className='border-2 border-gray p-2 items-center justify-center rounded-md' >
                                            <MaterialIcons name="arrow-forward-ios" size={15} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View className='justify-center' >
                                <AntDesign name="delete" size={24} color="white" />
                            </View>
                        </View>
                    ))
            }
        </View>
    )
}

export default Products_Car