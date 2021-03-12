import React from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Image,
} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { COLORS, SIZES, FONTS, icons, images } from '../constants'

const TransactionReceipt = () => {
    return(
        <View style = {styles.background} >
            <View style = {styles.container}>
                <Modal transparent = {true} visible = {true}>
                    <View style = {styles.modalContainer}>
                        <View style = {{backgroundColor: "white", margin: 35, borderRadius:20, flex: 1,}}>
                            <Image style={styles.ImageDesign} source = {require('../images/check.png')}></Image>
                            <Text style={styles.header}>Thank You!</Text>
                            <Text style={styles.textBody}>Your transaction was successful!</Text>
                            <Text style={styles.textBody}>____   ____   ____   ____   ____   ____   ____   ____</Text>
                            <View style={styles.textRow}>
                                <Text style={styles.textDetails}>Name:</Text>
                                <Text style={styles.textInfo}>Juan Dela Cruz</Text>
                            </View>
                            <View style={styles.textRow}>
                                <Text style={styles.textDetails}>Contact Number:</Text>
                                <Text style={styles.textInfo}>09123456789</Text>
                            </View>
                            <View style={styles.textRow}>
                                <Text style={styles.textDetails}>Load Amount:</Text>
                                <Text style={styles.textInfo}>P100.00</Text>
                            </View>
                            <View style={styles.textRow}>
                                <Text style={styles.textDetails}>Transaction Fee:</Text>
                                <Text style={styles.textInfo}>P5.00</Text>
                            </View>
                            <View style={styles.textRow}>
                                <Text style={styles.textDetails}>Tax:</Text>
                                <Text style={styles.textInfo}>P2.27</Text>
                            </View>
                            <TouchableOpacity style = {styles.button}>
                                <Text style={styles.textButton}>PRINT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{alignItems:'center'}}>
                                <Text style={styles.cancelButton}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalContainer: {
        flex: 1,
        paddingVertical: 30,
      },
      header:{
        ...FONTS.h2,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: hp('2%')
      },
      textRow:{
        flexDirection: 'row'
      },
      textBody:{
        ...FONTS.body4,
        color: COLORS.darkgray,
        textAlign:'center'
        
      },
      textDetails:{
        ...FONTS.body3,
        fontWeight: 'bold',
        marginLeft: hp('4.5%'),
        marginTop: hp('2%'),
      },

      textInfo:{
        position:'absolute',
        right: hp('4.5%'),
        ...FONTS.body3,
        alignItems:'flex-end',
        alignContent:'flex-end',
        alignSelf:'flex-end',
        
      },

      ImageDesign: {
        width: hp('20%'),
        height: hp('12%'),
        marginTop: hp('-5%'),
        alignSelf:'center',
        resizeMode: 'contain'

      },
      button:{
        marginTop: hp('5%'),
        alignSelf: 'center',
        borderRadius: 8,
        paddingVertical: hp('2%'),
        paddingHorizontal: hp('5%'),
        backgroundColor: '#FFFF33',
        
        
    },
    textButton:{
        color:'black',
        ...FONTS.body3,
        fontWeight: 'bold'
    },
    cancelButton:{
        color:'black',
        ...FONTS.body3,
        textDecorationLine: 'underline',
        marginTop: hp('3%')
    },
         
})


export default TransactionReceipt