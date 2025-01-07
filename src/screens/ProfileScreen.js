import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Text style={{ color: 'black',fontSize:30}}> Leo Culhane</Text>
        <Text style={{ color: 'black',fontSize:30 }}> Leo Culhane</Text>
      </View>
      <View>
      <View style={styles.secondContainer}>
      <Text style={{color: 'black',fontSize:15}}>Account</Text>
      </View>
      <View style={styles.thirdContainer}>
        <Icon
          name='user'
          type='font-awesome'
          color='#005499'
        />
        <View style={{flexDirection:'column', margin:15}}>
          <Text style={{ color: 'black',fontSize:20,fontWeight:'bold'}}>Edit Profile</Text>
          <Text style={{ color: 'black',fontSize:15}}>See & edit your profile</Text>
        </View>
        <Icon style={{marginLeft: 150}}
          name='menu-right'
          type='material-community'
        />
      </View>
      <View style={styles.forthContainer}>
        <Icon
          name='cart'
          type='material-community'
          color='#005499'
        />
        <View style={{flexDirection:'column', margin:10}}>
          <Text style={{ color: 'black',fontSize:20,fontWeight:'bold'}}>History Transaction</Text>
          <Text style={{ color: 'black',fontSize:15}}>See your history transaction on vintage</Text>
        </View>
        <Icon style={{marginLeft: 37}}
          name='menu-right'
          type='material-community'
        />
      </View>
      <View style={styles.fifthContainer}>
        <Icon
          name='account-key'
          type='material-community'
          color='#005499'
        />
        <View style={{flexDirection:'column', margin:10}}>
          <Text style={{ color: 'black',fontSize:20,fontWeight:'bold'}}>Change Password</Text>
          <Text style={{ color: 'black',fontSize:15}}>Change your password account</Text>
        </View>
        <Icon style={{marginLeft: 85}}
          name='menu-right'
          type='material-community'
        />
      </View>
      <View style={styles.sixthContainer}>
      <Text style={{color: 'black',fontSize:15}}>Other setting</Text>
      </View>
      <View style={styles.seventhContainer}>
        <Icon
          name='logout'
          type='material-community'
          color='#005499'
        />
        <View style={{flexDirection:'column', margin:10}}>
          <Text style={{ color: 'black',fontSize:20,fontWeight:'bold'}}>Log out</Text>
        </View>
        <Icon style={{marginLeft: 230}}
          name='menu-right'
          type='material-community'
        />
      </View>
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
    alignItems: 'center'
  },
  secondContainer:{
    margin: 10
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
  sixthContainer:{
    margin: 10
  },
  seventhContainer:{
     flexDirection: 'row',
    margin:15,
    alignItems:'center'
  },
})