import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'

const Footer = () => {
  return (
    <View className='bg-dark pl-6 py-5 flex-row' >
        <Text className='text-gray_two' >© 2024 Copyright </Text>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://meu-website-igor.vercel.app/')}} ><Text className='text-gray_two underline' >Igor_Walace</Text></TouchableOpacity>
    </View>
  )
}

export default Footer