import React from 'react'
import { ScrollView, Text, View } from 'react-native'

//banco
import DB from '../../heps/DB'

//pages
import Loading_Products from '../componentes/loading-products'
import Products from '../componentes/products'
import Title from '../componentes/title'

const Ofertas = () => {

    const { firestoreProducts } = DB()

    return (
        <View>
            <Title title={`Ofertas`} />
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