import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import DB from '../../heps/DB'
import Products from '../componentes/products'
import Loading_Products from '../componentes/loading-products'
import Title from '../componentes/title'

const Mouses = () => {

    const { firestoreProducts } = DB()

    return (
        <View>
            <Title title={`Mouses`} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Loading_Products />
                <View className='flex flex-row'>
                    {
                        firestoreProducts
                            .filter((product) => product.category === 'mouses')
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

export default Mouses