import { View } from 'react-native'

//icons
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//pages
import Logo from './componentes/logo';

const Header =  () => {

    return (
        <View className='items-center flex-row justify-between w-full' >
            <View className='border-2 border-dark_gray p-2 rounded-md' >
                <Feather name="menu" size={24} color="white" />
            </View>
            <Logo />
            <View className='border-2 border-dark_gray p-2 rounded-md' >
                <AntDesign name="shoppingcart" size={24} color="white" />
            </View>
        </View>
    )
}

export default Header