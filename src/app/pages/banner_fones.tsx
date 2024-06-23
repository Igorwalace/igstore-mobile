import React from 'react'
import { Image, Text, View } from 'react-native'

const Banner_Fones = () => {
    return (
        <View className="bg-gray w-full justify-around h-[150px] rounded-xl flex-row items-center">
            <Image
                className="w-[115px] h-[120px]"
                source={require('../assets/phone_6_1.png')}
            />
            <View>
                <Text className="text-white font-light" >até</Text>
                <Text className="font-bold text-4xl tracking-[-2px] -mt-2 text-main_two" >20%</Text>
                <Text className="text-white text-2xl font-bold -mt-4 tracking-[-1px]" >de desconto</Text>
                <Text className="text-white text-base font-light -mt-3" >em fones</Text>
            </View>
        </View>
    )
}

export default Banner_Fones