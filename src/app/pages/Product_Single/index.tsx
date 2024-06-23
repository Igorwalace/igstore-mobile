import React from 'react'
import { ScrollView, View } from 'react-native'

//pages
import Footer from '../home/footer'
import Header from '../home/header'
import Image_Product from './components/image-product'
import Container_Images from './components/container-imgs'
import Sub_Description_Product from './components/sub-description-price'
import Container_Price from './components/container-price'
import Arrow_Carrinho from './components/arrows-carrinho'
import Description from './components/description'
import Button_Add_Car from './components/button-add-car'
import Packet from './components/packet'
import Products_Recommended from './components/products-recommended'

const Product_Single = () => {

    return (
        <ScrollView className='bg-black' >
            <View className='h-full pt-7' >
                <View className='p-5 pb-5 border-b-2 border-dark_gray' >
                    <Header />
                </View>
                <Image_Product />
                <Container_Images />
                <View className='p-5 pt-0' >
                    <Sub_Description_Product />
                </View>
                <View className='p-5 pt-0' >
                    <Container_Price />
                </View>
                <View className='p-5 pt-2' >
                    <Arrow_Carrinho />
                </View>
                <View className='p-5 pt-2' >
                    <Description />
                </View>
                <View className='p-5 pt-2' >
                    <Button_Add_Car />
                    <Packet />
                </View>
                <View className='p-5' >
                    <Products_Recommended />
                </View>
                <View className={`w-full`} >
                    <Footer />
                </View>
            </View>
        </ScrollView>
    )
}

export default Product_Single