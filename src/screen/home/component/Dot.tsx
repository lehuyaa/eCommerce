import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Themes } from '../../../assets/themes'

const Dot = (props) => {
    const { active } = props;
    return (
        <View style={[styles.container, {
            backgroundColor: active ? Themes.PrimaryColor.blue : Themes.NeutralColors.light,
        }]} />

    )
}



const styles = StyleSheet.create({
    container: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    }
})
export default Dot