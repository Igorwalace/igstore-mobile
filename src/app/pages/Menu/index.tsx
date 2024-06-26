import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Modal, Linking } from 'react-native'

//reactNavi
import { useNavigation } from '@react-navigation/native'
import { DrawerContentScrollView } from '@react-navigation/drawer'

//pages
import Logo from '../home/componentes/logo'

//icons
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//functios

const Index = () => {

    const navigation: any = useNavigation();

    const handleNavigationMenu = (value: string) => {
        navigation.navigate(value)
    }

    return (
        <>
            <DrawerContentScrollView>
                <View className='p-5 space-y-3' >
                    <View className='flex-row justify-between border-b-2 border-dark_gray pb-5 mb-3' >
                        <Text className='text-white text-xl font-extrabold'>Menu</Text>
                        <Logo />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} className='space-x-4 p-4 py-2 rounded-2xl flex-row items-center border-2 border-dark_gray' >
                        <FontAwesome6 name="user-large" size={18} color="white" />
                        <Text className='text-white text-lg' >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleNavigationMenu('Home')} activeOpacity={0.8} className='space-x-4 p-4 py-2 rounded-2xl flex-row items-center border-2 border-dark_gray' >
                        <Entypo name="home" size={18} color="white" />
                        <Text className='text-white text-lg' >Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleNavigationMenu('Catalogo')} activeOpacity={0.8} className='space-x-4 p-4 py-2 rounded-2xl flex-row items-center border-2 border-dark_gray' >
                        <FontAwesome name="list-ul" size={18} color="white" />
                        <Text className='text-white text-lg' >Catálogo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://meu-website-igor.vercel.app/')}} activeOpacity={0.8} className='space-x-4 p-4 py-2 rounded-2xl flex-row items-center border-2 border-dark_gray' >
                        <MaterialIcons name="support-agent" size={20} color="white" />
                        <Text className='text-white text-lg' >Suporte</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </>
    )
}
export default Index