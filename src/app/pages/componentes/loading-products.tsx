import React from 'react'
import { View } from 'react-native'

//db
import DB from '../../heps/DB'

const Loading_Products = () => {

    const { firestoreProducts } = DB()

    return (
        <>
            {
                firestoreProducts.length < 1 &&
                [1, 2, 3, 4, 5, 6].map((number) => (
                    <View className='flex flex-row mb-3' key={number} >
                        <View className='mx-1' >
                            <View id='loading_products' className='w-[160px] h-[170px] bg-dark rounded-xl items-center justify-center relative' ></View>
                            <View className='w-[160px] h-10 bg-dark mt-1 rounded-xl' ></View>
                        </View>
                    </View>
                ))
            }
        </>
    )
}

export default Loading_Products