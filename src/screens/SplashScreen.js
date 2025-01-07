import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { color } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'


const SplashScreen = () => {
  const navigation = useNavigation()
    return (
        <View style={styles.centerHeader}>
            
            <Image style={{ alignItems: 'flex-start',margin:20,marginTop: 350 }}
              source={require('../../assets/Image/logo.png')}
              />
            
            <Text style={{ color: 'black',fontSize:30,margin:10,alignItems:'center',textAlign:'center'}}>Vintage</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    centerHeader:{
        justifyContent:'center',
        alignItems:'center',
    },
})
