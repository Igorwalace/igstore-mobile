import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

//pages
import Header from '../home/header'
import Products_Car from './components/products-car'

const Index = () => {
    return (
        <ScrollView className='bg-black' >
            <View className='h-full pt-7' >
                <View className='p-7 border-b-2 border-dark_gray' >
                    <Header />
                </View>
                <View>
                    <Products_Car />
                </View>
            </View>
        </ScrollView>
    )
}

export default Index