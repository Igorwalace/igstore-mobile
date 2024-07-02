//react
import { Text, TouchableOpacity, View } from 'react-native'

//icons
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//pages
import Logo from '../componentes/logo';
import { useNavigation, useRoute } from '@react-navigation/native';

//reactNavi

const Header = () => {

    const navigation:any = useNavigation();
    const route = useRoute();

    const screenName = route.name

    return (
        <>
            <View className='items-center flex-row justify-between w-full' >
                {
                    screenName === 'Home' ?
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.openDrawer('Menu')} className='border-2 border-dark_gray p-2 rounded-md' >
                            <Feather name="menu" size={24} color="white" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} className='p-2' >
                            <AntDesign name="arrowleft" size={24} color="white" />
                        </TouchableOpacity>
                }
                <Logo />
                <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('Carrinho')} className='border-2 border-dark_gray p-2 rounded-md' >
                    <AntDesign name="shoppingcart" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Header