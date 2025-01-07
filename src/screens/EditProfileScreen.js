import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Text style={{ color: 'black',fontSize:30,fontWeight:'bold' }}> Edit Profile</Text>
      </View>
      <View>
      <View style={styles.thirdContainer}>
        <View style={{flexDirection:'column', margin:10}}>
          <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Fullname</Text>
          <Text style={{ color: 'black',fontSize:20}}>Leo Culhane</Text>
        </View>
      </View>
      <View style={styles.forthContainer}>
        <View style={{flexDirection:'column', margin:10}}>
          <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Username</Text>
          <Text style={{ color: 'black',fontSize:20}}>leonardodicaprio</Text>
        </View>
      </View>
      <View style={styles.fifthContainer}>
        <View style={{flexDirection:'column', margin:10}}>
          <Text style={{ color: 'black',fontSize:20,fontWeight:'bold',marginBottom:15}}>Email</Text>
          <Text style={{ color: 'black',fontSize:20}}>leo@email.com</Text>
        </View>
      </View>
      <TouchableOpacity 
          style={styles.buyButton}
          onPress={{}}>
            <Text style={styles.buyText}>Update Profile</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  firstContainer: {
    alignItems: 'center',
    margin: 50
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
  fifthContainer:{
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
    marginVertical:200,
    margin:10
  },
  buyText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005499',
    padding: 15,
    color:'white',
    fontSize:25
  },
})