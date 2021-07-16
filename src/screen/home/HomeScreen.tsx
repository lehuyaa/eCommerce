import React from 'react';
import { Text, Image, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Themes } from '../../assets/themes';
import Header from '../../component/header/Header';
import FormSearch from './component/FormSearch';
import ButtonIcon from '../../component/button/ButtonIcon';
import Images from '../../assets/images';
import { ScaledSheet } from 'react-native-size-matters';
import Swiper from 'react-native-swiper'
import Dot from './component/Dot';
import ItemBanner from './component/ItemBanner';
import ViewTittle from './component/ViewTittle';
import ItemCategory from '../../component/item/ItemCategory';
import ItemProduct from '../../component/item/ItemProduct';
import { ListCategory } from './list/ListCategory';
import { arrBanner } from './list/ListBanner';
import { flashSale, megaSale } from './list/ListProduct';
import ListProduct from './component/ListProduct';
import { windowHeight, windowWidth } from '../../utill/Size';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header
                formInput={<FormSearch />}
                iconRight1={<ButtonIcon icon={Images.icon.heart} />}
                iconRight2={<ButtonIcon icon={Images.icon.notifications} />}
            />
            <ScrollView style={styles.scrollView}>
                <View style={styles.banner}>
                    <Swiper
                        loop={true}
                        index={0}
                        autoplay
                        dot={<Dot active={false} />}
                        activeDot={<Dot active={true} />}
                        scrollEnabled={false}
                        containerStyle={styles.swiper}
                        removeClippedSubviews={false}
                    >
                        {arrBanner.map((item, index) => (
                            <ItemBanner key={`${index}`} image={item.image} />
                        ))}
                    </Swiper>
                </View>
                <View style={styles.CategoryView}>
                    <ViewTittle tittle="Category" more="More Category" />
                    <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {ListCategory.map((item, index) => (
                            <ItemCategory key={`${index}`} icon={item.icon} tittle={item.tittle} />
                        ))}
                    </ScrollView>
                </View>
                <ListProduct arr={flashSale} tittle="Flash Sale" more="See More" />
                <ListProduct arr={megaSale} tittle="Mega Sale" more="See More" />
                <TouchableOpacity style={styles.recomendedProduct}>
                    <Image style={styles.image} source={Images.banner2} />
                    <Text style={styles.tittleRecomendedProduct}>Recomended{"\n"}
                        Product</Text>
                    <Text style={styles.textRecomendedProduct}>We recommend the best for you</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        backgroundColor: Themes.BackgroundColor.white,
        flex: 1,
        alignItems: 'center',
    },
    scrollView: {
        paddingBottom: 16
    },
    banner: {
        padding: 16,
        height: '250@vs',
        width: '100%',
        alignItems: 'center',
    },
    bannerImage: {
        width: '320@s',
        height: '180@vs',
        borderRadius: 5,

    },
    swiper: {
        marginBottom: -15
    },
    CategoryView: {
        paddingLeft: 16,
        marginBottom: 24
    },
    flashSale: {
        paddingLeft: 16,
    },
    recomendedProduct: {
        padding: 16,
        height: '210@vs',
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '180@vs',
        borderRadius: 5,
    },
    tittleRecomendedProduct: {
        position: 'absolute',
        fontSize: 26,
        fontWeight: '700',
        color: Themes.BackgroundColor.white,
        left: '50@vs',
        top: '50@s',
        lineHeight: 36

    },
    textRecomendedProduct: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: '400',
        color: Themes.BackgroundColor.white,
        left: '50@vs',
        bottom: '60@s'
    },

})
export default HomeScreen;
