import React, { useState } from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    FlatList, 
} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { COLORS, SIZES, FONTS, icons, images } from '../constants'

const dataList = [
    {name: 'Load to Name of Bettor', amount:'-P500', date: 'February 24, 2021', key: '1'},
    {name: 'Credit from BP Admin', amount:'+P1000', date: 'March 03, 2021', key: '2'}
]


_renderItem = ({item, index}) => {
    return(
        <ScrollView style={{borderBottomWidth: 1}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textAmount}>{item.amount}</Text>
            </View>
            <View>
            <Text style={styles.textDate}>{item.date}</Text>
            </View>
        </ScrollView>
    )
}



const TransactionHistory = () => {
    return(
        <View style = {styles.background}>
            <View style = {styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Text style = {styles.TextDetails}>Current Load: </Text>
                    <Text style = {styles.TextInfo}>P3,000.00</Text>
                </View>
            </View>
            <View style = {styles.TransactionTab}>
                <Text style = {styles.textTitle}>Transaction History</Text>
                <FlatList
                    data = {dataList}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: COLORS.lightBlue,
        flex: 1  
    },
    container: {
        marginTop: hp('2%'),
        marginRight: hp('3%'),
        marginLeft: hp('3%'),
        backgroundColor:'white',
        borderRadius: 20,
        paddingHorizontal: hp('1%'),
        paddingVertical: hp('5%'),
      },
      TextDetails:{
        ...FONTS.h2,
        fontWeight: 'bold',
        marginLeft: hp('2%'),
      },
      TextInfo:{
        position: 'absolute',
        ...FONTS.h2,
        fontWeight: 'bold',
        right: hp('2%')
      },
      textTitle:{
          ...FONTS.h2, 
          fontWeight: 'bold',
          marginLeft: hp('2%'),
      },
      TransactionTab:{
        flex: 1,
        marginTop: hp('2%'),
        marginRight: hp('3%'),
        marginLeft: hp('3%'),
        marginBottom: hp('8%'),
        backgroundColor:'white',
        borderRadius: 20,
        paddingHorizontal: hp('1%'),
        paddingVertical: hp('3%')
      },
      textAmount:{
        marginTop: hp('4%'),
        ...FONTS.body3,
        position: 'absolute',
        right: hp('2%'),
        

      },
      textName:{
        ...FONTS.body3,
        fontWeight: 'bold',
        marginLeft: hp('2.5%'),
        marginTop: hp('2%'),
      },
      textDate:{
        ...FONTS.body3,
        marginLeft: hp('2.5%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
      },
    

})

export default TransactionHistory

