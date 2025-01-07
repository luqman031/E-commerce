import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'

const ProductList = (props) => {
    const {productPrice, productName, productSize} = props 
  return (
    <View style={styles.mainContainer}>
      <Image 
        style={{ width:164, height:200 }}
        {...props}
      />
       <Text style={{fontSize: 25,color:"black", fontWeight:'bold', width:160}}>Rp. {`${productPrice}`} </Text>
       <Text style={{fontSize: 15,color:"black", width:170}}>{productName}</Text>
       <Text style={{fontSize: 15,color:"black"}}>{productSize}</Text>
       <Icon style={{ alignItems: 'flex-end', }}
          name='cards-heart'
          type='material-community'
          color='red'
        />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  mainContainer: {
    margin: 5,
  },
})