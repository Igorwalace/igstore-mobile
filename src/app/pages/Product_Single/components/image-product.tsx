import { Image, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'

//helps
import Help_Products from '../help-products'

const Image_Product = () => {

    const { product} = Help_Products()
    const [currentImage, setCurrentImage] = useState(product.img_main)

    useEffect(()=>{
        setCurrentImage(product.img_main)
    },[product])

    return (
        <>
            <View className='w-full h-[390px] bg-dark_gray items-center justify-center'  >
                <Image
                    className='w-[270px] h-[200px]'
                    source={{ uri: currentImage }}
                />
            </View>
            <View className='bg-black -mt-5 w-full rounded-t-3xl p-7 pt-10' >
                <View className='flex-row gap-4 items-center justify-center' >
                    <TouchableOpacity activeOpacity={0.9} onPress={() => { setCurrentImage(product.img_main) }} className={`${currentImage === product.img_main && 'border-main'} border-2 w-[77px] h-[77px] bg-dark_gray rounded-xl items-center justify-center`} >
                        <Image
                            className='w-[57px] h-[43px]'
                            source={{ uri: product.img_main }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => { setCurrentImage(product.img_2) }} className={`${currentImage === product.img_2 && 'border-main'} border-2 w-[77px] h-[77px] bg-dark_gray rounded-xl items-center justify-center`} >
                        <Image
                            className='w-[57px] h-[43px]'
                            source={{ uri: product.img_2 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => { setCurrentImage(product.img_3) }} className={`${currentImage === product.img_3 && 'border-main'} border-2 w-[77px] h-[77px] bg-dark_gray rounded-xl items-center justify-center`} >
                        <Image
                            className='w-[57px] h-[43px]'
                            source={{ uri: product.img_3 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => { setCurrentImage(product.img_4) }} className={`${currentImage === product.img_4 && 'border-main'} border-2 w-[77px] h-[77px] bg-dark_gray rounded-xl items-center justify-center`} >
                        <Image
                            className='w-[57px] h-[43px]'
                            source={{ uri: product.img_4 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Image_Product