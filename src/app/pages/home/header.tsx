//react
import { TouchableOpacity, View } from 'react-native'

//icons
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//pages
import Logo from './componentes/logo';

//reactNavi

const Header =  () => {
    return (
        <View className='items-center flex-row justify-between w-full' >
            <TouchableOpacity activeOpacity={0.7} className='border-2 border-dark_gray p-2 rounded-md' >
                <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
            <Logo />
            <View className='border-2 border-dark_gray p-2 rounded-md' >
                <AntDesign name="shoppingcart" size={24} color="white" />
            </View>
        </View>
    )
}

export default Header