import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { Themes } from '../../assets/themes';

const ItemCategory = (props) => {
    const { icon, tittle } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.viewImage}>
                    <Image style={styles.icon} source={icon} />
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>{tittle}</Text>
        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        height: '95@vs',
        width: '60@s',
        marginTop: 17,
        marginRight: 14
    },
    viewImage: {
        width: '100%',
        height: '55@vs',
        borderRadius: '27@vs',
        borderWidth: 1,
        borderColor: Themes.NeutralColors.light,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 25,
        height: 25,
    },
    title: {
        marginTop: 12,
        fontSize: 12,
        textAlign: 'center',
        color: Themes.NeutralColors.grey,
        fontWeight: '400'
    }
})
export default ItemCategory
