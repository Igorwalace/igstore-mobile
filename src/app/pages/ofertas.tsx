import React from 'react'
import { ScrollView, Text, View } from 'react-native'

//banco
import DB from '../heps/DB'

//pages
import Products from './componentes/products'
import Loading_Products from './componentes/loading-products'

const Ofertas = () => {

    const { firestoreProducts } = DB()

    return (
        <View>
            <Text className='text-white text-base font-extrabold ml-1 pb-2' >OFERTAS</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Loading_Products />
                <View className='flex flex-row'>
                    {
                        firestoreProducts
                            .filter((product) => product.discount != null)
                            .slice(0, 6)
                            .map((product) => (
                                <Products key={product.id} product={product} />
                            ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default Ofertas