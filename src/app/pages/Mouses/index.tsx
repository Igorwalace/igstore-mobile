import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Loading_Products from '../home/componentes/loading-products'
import DB from '../../heps/DB'
import Products from '../home/componentes/products'
import Header from '../home/header'
import { StatusBar } from 'expo-status-bar'
import Footer from '../home/footer'

const Index = () => {

    const { firestoreProducts } = DB()

    return (
        <ScrollView className='bg-black' >
            <View className='h-full pt-7 items-center justify-center' >
                <StatusBar style='light' backgroundColor='#1A1A1A'  />
                <View className='p-7 border-b-2 border-dark_gray' >
                    <Header />
                </View>
                <Text className='text-white text-lg font-extrabold ml-1 pb-3 pt-3' >MOUSES</Text>
                <View className='flex-row flex-wrap items-center justify-center' ><Loading_Products /></View>
                <View className='flex-row flex-wrap items-center justify-center pb-4'>
                    {
                        firestoreProducts
                            .filter((product) => product.category === 'mouses')
                            .slice(0, 6)
                            .map((product) => (
                                <Products key={product.id} product={product} />
                            ))
                    }
                </View>
                <View className={`${firestoreProducts.length < 1 && 'hidden'} w-full`} >
                    <Footer />
                </View>
            </View>
        </ScrollView>
    )
}

export default Index