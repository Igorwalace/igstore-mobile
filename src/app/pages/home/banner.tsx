import { Image, Text, View } from "react-native";

export const Banner = () => {

    return (
        <View className="bg-main w-full justify-around h-[150px] rounded-xl flex-row items-center">
            <View>
                <Text className="text-white font-light" >até <Text className="font-bold text-4xl tracking-[-2px]" >55%</Text></Text>
                <Text className="text-white text-2xl font-bold -mt-4 tracking-[-1px]" >Desconto</Text>
                <Text className="text-white text-base font-light -mt-3" >Só esse mês</Text>
            </View>
            <Image
                className="w-[115px] h-[130px]"
                source={require('../../assets/cart.png')}
            />
        </View>
    )
}

export default Banner