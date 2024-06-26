import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

//icons
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Category = () => {

    const navigation: any = useNavigation();

    const handlePages = (value:string) => {
        navigation.navigate(value)
    }

    return (
        <View className='w-full flex-row justify-between flex-wrap' >
            <TouchableOpacity onPress={()=>handlePages('Keyboard')} activeOpacity={0.7} className='border-2 border-dark_gray p-2 rounded-xl items-center justify-center flex-row gap- w-[49%]' >
                <FontAwesome6 name="keyboard" size={15} color="white" />
                <Text className='text-white text-xs px-2' >Teclados</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlePages('Mouses')} activeOpacity={0.7} className='border-2 border-dark_gray p-2 rounded-xl items-center justify-center flex-row gap- w-[49%]' >
                <SimpleLineIcons name="mouse" size={15} color="white" />
                <Text className='text-white text-xs px-2' >Mouses</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlePages('Fones')} activeOpacity={0.7} className='border-2 border-dark_gray p-2 rounded-xl items-center justify-center flex-row gap- w-[49%] mt-2' >
            <Feather name="headphones" size={15} color="white" />
                <Text className='text-white text-xs px-2' >Fones</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handlePages('Keyboard')} activeOpacity={0.7} className='border-2 border-dark_gray p-2 rounded-xl items-center justify-center flex-row gap- w-[49%] mt-2' >
            <Foundation name="monitor" size={15} color="white" />
                <Text className='text-white text-xs px-2' >Teclados</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category