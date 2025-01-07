import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { color } from '@rneui/base'


const EmptyProduct = () => {
    return (
        <View style={styles.centerHeader}>
            
            <Icon style={{ alignItems: 'flex-start',margin:20, marginTop:250}}
                name="cart-off"
                type="material-community"
                color="gray" 
                size={100}
              />

            <Text style={{ color: 'black',fontSize:30,fontWeight:'bold',margin:10 }}> Product not found</Text>
            <Text style={{ color: 'black',fontSize:20,margin:10,alignItems:'center',textAlign:'center'}}> We cannot find what you looking for, try to use other keywords or reset keyword.</Text>
            <TouchableOpacity 
          style={styles.searchButton}
          onPress={{}}>
            <Text style={styles.searchText}>Reset Keyword</Text>
    </TouchableOpacity>
        </View>
    )

}

export default EmptyProduct

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
    width:350
  },
  searchText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005499',
    padding: 15,
    color:'white',
    fontSize:25
  }
})