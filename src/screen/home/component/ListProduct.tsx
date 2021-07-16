import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ItemProduct from '../../../component/item/ItemProduct'
import { flashSale } from '../list/ListProduct'
import ViewTittle from './ViewTittle'
import { ScaledSheet } from 'react-native-size-matters';
import { windowWidth, windowHeight } from '../../../utill/Size';

const ListProduct = (props) => {

    const { tittle, more, arr } = props
    const list = arr ? arr : []
    return (
        <View style={styles.flashSale}>
            <ViewTittle tittle={tittle} more={more} />
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {list.map((item, index) => (
                    <ItemProduct
                        key={`${index}`}
                        image={item.images}
                        name={item.name}
                        price={item.name}
                        oldPrice={item.oldPrice}
                        percent={item.percent}
                    />
                ))}
            </ScrollView>

        </View>
    )
}


const styles = ScaledSheet.create({
    flashSale: {
        paddingLeft: 16,
        height: windowHeight * 0.35,
        // backgroundColor: 'red'
    }
})

export default ListProduct