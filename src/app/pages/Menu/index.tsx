import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Modal } from 'react-native'

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

    return (
        <>
            <DrawerContentScrollView>
                <View className='p-5' >
                    <View className='flex-row justify-between border-b-2 border-dark_gray pb-5' >
                        <Text className='text-white text-xl font-extrabold'>Menu</Text>
                        <Logo />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} className='py-3 flex-row gap-4 items-center' >
                        <FontAwesome6 name="user-large" size={18} color="white" />
                        <Text className='text-white text-lg' >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.8} className='py-3 flex-row gap-4 items-center' >
                        <Entypo name="home" size={18} color="white" />
                        <Text className='text-white text-lg' >Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} className='py-3 flex-row gap-4 items-center' >
                        <FontAwesome name="list-ul" size={18} color="white" />
                        <Text className='text-white text-lg' >Catálogo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} className='py-3 flex-row gap-4 items-center' >
                        <MaterialIcons name="support-agent" size={20} color="white" />
                        <Text className='text-white text-lg' >Suporte</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </>
    )
}
export default Index