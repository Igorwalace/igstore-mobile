import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Loading_Products from '../componentes/loading-products'
import DB from '../../heps/DB'
import Products from '../componentes/products'
import Header from '../home/header'
import { StatusBar } from 'expo-status-bar'
import Footer from '../home/footer'
import { useNavigation } from '@react-navigation/native'

const Catalogo = () => {

    const { firestoreProducts } = DB()
    const navigation:any = useNavigation()

    const ProductsCatalogo = [
        {
            title: 'Mouses',
            link: 'Mouses',
            img: 'https://firebasestorage.googleapis.com/v0/b/igstore-mobile.appspot.com/o/produtos%2Fmouses%2Fp4%2Fmouse_4_2.png?alt=media&token=0c5eb8b9-8c22-4c63-a386-4e97c97d5c6f'
        },
        {
            title: 'Teclados',
            link: 'Keyboard',
            img: 'https://firebasestorage.googleapis.com/v0/b/igstore-mobile.appspot.com/o/produtos%2Fteclados%2Fp4%2FkeyBoard_4_2.png?alt=media&token=de1e1d68-9180-4574-b116-0e0fcea2691f'
        },
        {
            title: 'Fones',
            link: 'Fones',
            img: 'https://firebasestorage.googleapis.com/v0/b/igstore-mobile.appspot.com/o/produtos%2Ffones%2Fp4%2Fphone_4.png?alt=media&token=81c77d54-475c-415f-b2d9-499d95608848'
        },
        {
            title: 'Monitores',
            link: '#',
            img: 'https://firebasestorage.googleapis.com/v0/b/igstore-mobile.appspot.com/o/produtos%2Fmonitores%2Fmonitor.png?alt=media&token=36bd3050-afc4-4c87-ad41-b96a90bda237'
        },
    ]
    return (
        <ScrollView className='bg-black h-full relative' >
            <View className='h-full pt-7 items-center justify-center' >
                <StatusBar style='light' backgroundColor='#1A1A1A' />
                <View className='p-7 border-b-2 border-dark_gray' >
                    <Header />
                </View>
                <Text className='text-white text-lg font-extrabold ml-1 pb-3 pt-3' >CATÁLOGO</Text>

                <View className='flex-row flex-wrap gap-3 items-center justify-center pt-5' >
                    {
                        ProductsCatalogo.map((product)=>(
                            <TouchableOpacity onPress={()=>navigation.navigate(product.link)} key={product.img}>
                                <View className='bg-main w-[160px] h-[193px] rounded-t-xl items-center justify-center' >
                                    <Image
                                        className='w-[102px] h-[102px]'
                                        source={{uri: product.img}}
                                    />
                                </View>
                                <View className='bg-dark_gray rounded-b-xl w-[160px] h-10 justify-center' >
                                    <Text className='text-center text-white font-extrabold' >{product.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>

                {/* <View className={`${firestoreProducts.length < 1 && 'hidden'} w-full`} >
                    <Footer />
                </View> */}
            </View>
        </ScrollView>
    )
}

export default Catalogo