import { Platform, ScrollView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

//pages
import Header from './header'
import Banner from './banner'
import Category from './category'
import Ofertas from './ofertas'
import KeyBoard from './keyboard'
import Banner_Fones from './banner_fones'
import Footer from './footer'

//react

const Home = () => {
    return (
        <ScrollView className='bg-black' >
            <StatusBar style='light' backgroundColor='#1A1A1A' />
            <View className='h-full pt-7 items-center justify-center' >
                <View className='p-7 border-b-2 border-dark_gray' >
                    <Header />
                </View>
                <View className='p-5 pb-0 w-full' >
                    <Banner />
                </View>
                <View className='p-5 pb-0 w-full' >
                    <Category />
                </View>
                <View className='p-5 w-full' >
                    <Ofertas />
                </View>
                <View className='p-5 w-full' >
                    <Banner_Fones />
                </View>
                <View className='p-5 w-full' >
                    <KeyBoard />
                </View>
                <View className={`w-full`} >
                    <Footer />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home