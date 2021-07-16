import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import Images from '../../assets/images';
import { Themes } from '../../assets/themes';
import { windowWidth, windowHeight } from '../../utill/Size';

const ItemProduct = (props) => {

    const { image, name, price, oldPrice, percent } = props;
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.viewImage}>
                    <Image style={styles.image} source={image} />
                </View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price}</Text>
                <View style={styles.discount}>
                    <Text style={styles.oldPrice}>{oldPrice}</Text>
                    <Text style={styles.percent}>{percent}</Text>

                </View>
            </View>
        </TouchableOpacity>

    )
}



const styles = ScaledSheet.create({
    container: {
        width: '130@s',
        height: '89%',
        borderWidth: 1,
        borderColor: Themes.NeutralColors.light,
        marginTop: 18,
        borderRadius: 5,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 16,
    },
    viewImage: {
        alignItems: 'center',
        width: '100%',
        height: '50%'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 12,
        marginTop: 8,
        fontWeight: '700',
        color: Themes.NeutralColors.Dark,
    },
    price: {
        fontSize: 12,
        fontWeight: '700',
        marginTop: 8,
        color: Themes.PrimaryColor.blue
    },
    discount: {
        flexDirection: 'row',
        marginTop: 8,
    },
    oldPrice: {
        fontSize: 10,
        fontWeight: '400',
        color: Themes.NeutralColors.grey,
        marginRight: 10,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    percent: {
        fontSize: 10,
        fontWeight: '700',
        color: Themes.PrimaryColor.red
    }
})

export default ItemProduct
