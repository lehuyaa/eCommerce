import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const ButtonIcon = (props) => {
    const { icon } = props;
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.icon} source={icon} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginLeft: 9
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    }
})

export default ButtonIcon
