import React from 'react'
import { ScrollView, Text, View } from 'react-native'

//db
import DB from '../../../heps/DB'

//pages
import Loading_Products from '../../componentes/loading-products'
import Products from '../../componentes/products'
import Help_Products from '../../../heps/help-products'
import Title from '../../componentes/title'

const Products_Recommended = () => {

    const { firestoreProducts } = DB()
    const { product } = Help_Products()

    return (
        <View>
            <Title title={`Produtos recomendados`} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Loading_Products />
                <View className='flex flex-row'>
                    {
                        firestoreProducts
                            .filter((product_single)=> product_single.id != product.id && product_single.category === product.category)
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

export default Products_Recommended