import React from 'react'
import { Text, View } from 'react-native'

//icons
import { FontAwesome6 } from '@expo/vector-icons';
import DB from '../../../heps/DB';
import Help_Products from '../../../heps/help-products';

const Packet = () => {

    const { firestoreStore } = DB()
    const { product } = Help_Products()

    return (
        <View className='bg-dark_gray w-full p-3 px-5 mt-3 rounded-xl justify-between flex-row items-center space-x-2' >
            <View className='flex-row items-center space-x-4' >
                <View>
                    <FontAwesome6 name="truck-fast" size={24} color="white" />
                </View>
                <View className='justify-center' >
                    {
                        firestoreStore
                            .filter((store) => product.storeId === store.id)
                            .map((store) => (
                                <View key={store.id} className='flex-row' >
                                    <Text className='text-light_gray' >Vendido por: </Text>
                                    <Text className='text-light_gray font-extrabold'>{store.name}</Text>
                                </View>
                            ))
                    }
                    <View>
                        <Text className='text-main font-medium' >Envio para <Text className='font-extrabold' >todo Brasil</Text> </Text>
                    </View>
                </View>
            </View>
            <View>
                <Text className='text-white font-bold' >Frete grátis</Text>
            </View>
        </View>
    )
}

export default Packet