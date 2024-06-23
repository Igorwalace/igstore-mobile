import React from 'react'
import { View, Text } from 'react-native'

//icons
import { MaterialIcons } from '@expo/vector-icons';

const Arrow_Carrinho = () => {
    return (
        <View className='flex-row items-center' >
            <View className='border-2 border-gray p-1 items-center justify-center rounded-md' >
                <MaterialIcons name="arrow-back-ios-new" size={24} color="white" />
            </View>
            <View className='' >
                <Text className='text-white text-center text-sm w-10' >1</Text>
            </View>
            <View className='border-2 border-gray p-1 items-center justify-center rounded-md' >
                <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </View>
        </View>
    )
}

export default Arrow_Carrinho