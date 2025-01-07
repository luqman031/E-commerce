import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { color } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
  const navigation = useNavigation()
    return (
        <View style={styles.centerHeader}>
            
            <Image style={{ alignItems: 'flex-start',margin:20,marginTop: 25 }}
              source={require('../../assets/Image/Welcome.png')}
              />

            <Text style={{ color: 'black',fontSize:30,margin:10,alignItems:'center',textAlign:'center'}}>Find your favorite pre-loved products</Text>
          <TouchableOpacity 
          style={styles.searchButton}
          onPress={{}}>
            <Text style={styles.searchText}>Sign up to Vintage</Text>
              </TouchableOpacity>
           <TouchableOpacity 
          style={styles.searchButton2}
          onPress={{}}>
            <Text style={styles.searchText2}>I already have an account</Text>
              </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
             <Text style={{ color: '#005499',fontSize:20,margin:10,alignItems:'center',textAlign:'center'}}>Login as guest</Text>
            </TouchableOpacity>
        </View>
    )

}

export default WelcomeScreen

const styles = StyleSheet.create({
    centerHeader:{
        justifyContent:'center',
        alignItems:'center'
    },
    searchButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005499',
    padding: 1,
    marginBottom:5,
    borderRadius:10,
    margin:15,
    width:350,
  },
  searchButton2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderB: '',
    padding: 1,
    marginBottom:5,
    borderRadius:10,
    margin:15,
    width:350,
    borderWidth: 1,
    borderColor: '#005499'
  },
  searchText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005499',
    padding: 15,
    color:'white',
    fontSize:25
  },
  searchText2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    color:'#005499',
    fontSize:25
  }
})