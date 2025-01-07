import { StyleSheet, Text, View, Image,Button,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'

const DetailProduct = (props) => {
  const {productImage,productPrice,productName,productDescription,productCategory,productSize,productShipping} = props
  return (
    <ScrollView>
    <View>
       <Image 
        style={{height:200}}
        {...props}
        />
      <Text style={{fontSize:35,textAlign:'left',margin:10}}>Rp.{`${productPrice}`}</Text>
      <Text style={{fontSize:25, margin:10}}>{`${productName}`} </Text>
    <TouchableOpacity 
          style={styles.buyButton}
          onPress={{}}>
            <Text style={styles.buyText}>Buy Now</Text>
    </TouchableOpacity>

    <TouchableOpacity 
          style={styles.buyButton}
          onPress={{}}>
            <Text style={styles.cartText}>Add to Cart</Text>
    </TouchableOpacity>

    <Text style={{fontSize:15,textAlign:'left',marginBottom:5,margin:5}}>Item Description</Text>
    <Text style={{fontSize:20, margin:10, alignItems:'left'}}>{`${productDescription}`} </Text>

    <View>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:15,textAlign:'left',marginBottom:5,margin:5}}>Category</Text>
        <Text style={{fontSize:15,textAlign:'left',marginBottom:5,margin:5}}> {`${productCategory}`}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:15,textAlign:'left',marginBottom:5,margin:5}}> Size</Text>
        <Text style={{fontSize:15,textAlign:'left',marginBottom:5,margin:5}}> {`${productSize}`}</Text>
      </View>
       <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style={{fontSize:15,textAlign:'left',marginBottom:5,margin:5}}> Condition</Text>
      </View>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style={{fontSize:15,textAlign:'left',marginBottom:5,margin:5}}> Colors</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style={{fontSize:15,textAlign:'left',marginBottom:5,margin:5}}> Shipping</Text>
          <Text style={{fontSize:15,textAlign:'left',marginBottom:5,margin:5}}> {`${productShipping}`}</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default DetailProduct

const styles = StyleSheet.create({
  buyButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005499',
    padding: 1,
    marginBottom:5,
    borderRadius:10,
    margin:15
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
  cartText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#005499',
    padding: 15,
    color:'white',
    fontSize:25,
    borderRadius:10,
    alignSelf:'center'
  },
})