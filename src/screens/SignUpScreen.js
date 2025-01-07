import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'
import { Icon, CheckBox } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
  //const navigation = useNavigation()
  const [isSelectAll, setIsSelectAll] = useState(false)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Text style={{ color: 'black',fontSize:30,fontWeight:'bold',justifyContent:'center',marginLeft:'auto',marginRight:'auto' }}>Sign Up</Text>
      </View>
      <View>
      <View style={styles.thirdContainer}>
        <View style={{flexDirection:'column', margin:10}}>
          <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Full name </Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', width:340}}>
          <TextInput 
            // onChangeText={handleChange('oldPassword')}
            // onBlur={handleBlur('oldPassword')}
            placeholder='Enter your fullname'
            style={styles.innerInput}
          />
          </View>
        </View>
      </View>
      <View style={styles.forthContainer}>
        <View style={{flexDirection:'column', margin:10}}>
         <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Username </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', width:340}}>
          <TextInput 
            // onChangeText={handleChange('oldPassword')}
            // onBlur={handleBlur('oldPassword')}
            placeholder='Enter your Username'
            style={styles.innerInput}
          />
        </View>
        </View>
      </View>
      <View style={styles.forthContainer}>
        <View style={{flexDirection:'column', margin:10}}>
         <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Email </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', width:340}}>
          <TextInput 
            // onChangeText={handleChange('oldPassword')}
            // onBlur={handleBlur('oldPassword')}
            placeholder='Enter your Email'
            style={styles.innerInput}
          />
        </View>
        </View>
      </View>
      <View style={styles.forthContainer}>
        <View style={{flexDirection:'column', margin:10}}>
         <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Password </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', width:365}}>
          <TextInput 
            // onChangeText={handleChange('oldPassword')}
            // onBlur={handleBlur('oldPassword')}
            placeholder='Enter your Password'
            style={styles.innerInput}
          />
          <Icon
            name='eye'
            type='ant-design'
          />
        </View>
        </View>
      </View>
      <View style={styles.forthContainer}>
        <View style={{flexDirection:'column', margin:10}}>
         <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Confirmation Password </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', width:365}}>
          <TextInput 
            // onChangeText={handleChange('oldPassword')}
            // onBlur={handleBlur('oldPassword')}
            placeholder='Same with Password'
            style={styles.innerInput}
          />
          <Icon
            name='eye'
            type='ant-design'
          />
        </View>
        </View>
      </View>
      <View style={{ marginTop: 80,margin: 5, flexDirection:'row'}}>
      <CheckBox
        onPress={() => setIsSelectAll(!isSelectAll)}
            checked={isSelectAll}
            containerStyle={styles.checkBoxContainer}
      />
      <Text style={{}}> By clicking sign up, I hereby agree and consent to Term & Conditions; I confirm that I have read Privacy policy.</Text>
      </View>
      <TouchableOpacity 
          style={styles.buyButton}
          onPress={{}}>
            <Text style={styles.buyText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpScreen

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
  },
  checkBoxContainer: {
    padding: 0,
    margin: 0,
    marginLeft: 0,
    color:'#005499'
  }
})