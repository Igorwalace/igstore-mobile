import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//icons
import { MaterialIcons } from '@expo/vector-icons';

//helps
import Help_Products from '../../../heps/help-products';
import Help_Carrinho from '../../../heps/help-carrinho';

const Arrow_Carrinho = () => {

    const { product } = Help_Products()
    const { currentQuant, setCurrentQuant } = Help_Carrinho()

    const handleAddQuant = () => {
        if(currentQuant === 5) return
        setCurrentQuant(currentQuant + 1)
    }
    const handleRemoveQuant = () => {
        if(currentQuant === 1) return
        setCurrentQuant(currentQuant - 1)
    }

    return (
        <View className='flex-row items-center' >
            <TouchableOpacity onPress={handleRemoveQuant} disabled={product.quant === 0} activeOpacity={0.8} className='border-2 border-gray p-2 items-center justify-center rounded-md' >
                <MaterialIcons name="arrow-back-ios-new" size={24} color="white" />
            </TouchableOpacity>
            <View className='' >
                <Text className='text-white text-center text-sm w-10' >{product.quant === 0 ? '0' : currentQuant}</Text>
            </View>
            <TouchableOpacity onPress={handleAddQuant} disabled={product.quant === 0} activeOpacity={0.8} className='border-2 border-gray p-2 items-center justify-center rounded-md' >
                <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Arrow_Carrinho