import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

//reactNavi
import { useNavigation } from '@react-navigation/native';

const Logo = () => {

    const navigation:any = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('Home')} >
            <Text className='text-white text-2xl text-main font-black' >IG<Text className='text-white' >Store</Text></Text>
        </TouchableOpacity>
    )
}

export default Logo