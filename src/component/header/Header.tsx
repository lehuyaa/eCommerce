import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Themes } from '../../assets/themes';

const Header = (props) => {
    const { formInput, iconRight1, iconRight2 } = props;
    return (
        <View style={styles.container}>
            {formInput}
            <View style={styles.icon}>
                {iconRight1}
                {iconRight2}
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.BackgroundColor.white,
        borderBottomColor: Themes.NeutralColors.light,
        borderBottomWidth: 2,
        height: '14%',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 15,
        paddingBottom: 15,
        alignItems: 'flex-end',
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '20%',
    }
})

export default Header
