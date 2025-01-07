import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';


const LoginScreen = (props) => {
  const navigation = useNavigation()

  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Text style={{ color: 'black',fontSize:30,fontWeight:'bold',justifyContent:'center',marginLeft:'auto',marginRight:'auto' }}>Login</Text>
      </View>
      <View>
      <View style={styles.thirdContainer}>
        <View style={{flexDirection:'column', margin:10}}>
          <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Email </Text>
          <TextInput 
            // onChangeText={handleChange('oldPassword')}
            // onBlur={handleBlur('oldPassword')}
            placeholder='Enter your Email'
            style={styles.innerInput}
          />
        </View>
      </View>
      <View style={styles.forthContainer}>
        <View style={{flexDirection:'column', margin:10}}>
         <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Password </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', width:340}}>
          <TextInput 
            // onChangeText={handleChange('oldPassword')}
            // onBlur={handleBlur('oldPassword')}
            placeholder='Enter Password'
            style={styles.innerInput}
          />
          <Icon
            name='eye'
            type='ant-design'
          />
        </View>
        </View>
      </View>
      <TouchableOpacity 
          style={styles.buyButton}
          onPress={{}}>
            <Text style={styles.buyText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  firstContainer: {
    alignItems: 'center',
    margin: 50,
    flexDirection:'row'
  },
  thirdContainer:{
    flexDirection: 'row',
    marginHorizontal:15,
    alignItems:'center',
  },
  forthContainer:{
    flexDirection: 'row',
    marginHorizontal:15,
    alignItems:'center'
  },
    buyButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005499',
    padding: 1,
    marginBottom:5,
    borderRadius:10,
    marginVertical:50,
    margin:10
  },
  buyText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005499',
    padding: 12,
    color:'white',
    fontSize:20
  },
  innerInput:{
    flex: 1
  }
})