import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Themes } from '../../../assets/themes';

const ViewTittle = (props) => {
    const { tittle, more } = props;
    return (
        <View style={styles.viewTextTittle}>
            <Text style={styles.titleCategory}>{tittle}</Text>
            <TouchableOpacity>
                <Text style={[styles.titleCategory, { color: Themes.PrimaryColor.blue }]}>{more}</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    viewTextTittle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 16
    },
    titleCategory: {
        fontSize: 14,
        fontWeight: '700'
    },

})

export default ViewTittle
