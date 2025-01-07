import { View, Text, Image, FlatList, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import BrandList from '../components/BrandList'
import { productData } from '../data/productDummyData'
import { brandData } from '../data/brandDummyData'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.searchHeader}>
            <View style={styles.searchStyle}>
              <Icon style={{ alignItems: 'flex-start', }}
                name='search'
                type='ionicon'
                color='gray'
              />
              <Text style={styles.searchPlaceHolder}> Search  for item</Text>
            </View>
            <View style={styles.heartOnHeader}>

              <Icon style={{ alignItems: 'flex-end', }}
                name='cards-heart'
                type='material-community'
                color='red'
              />
            </View>
          </View>
        </View>

        <View style={styles.headerText}>
          <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: 'black' }}>Popular item</Text>
          <Text style={{ alignSelf: 'flex-end', fontSize: 20, color: "blue", textDecorationLine:'underline',textDecorationColor:'blue'}}
            onPress={() => navigation.navigate('WelcomeScreen')}>
            See All</Text>
        </View>
        <FlatList
          data={productData}
          horizontal
          contentContainerStyle={{ padding: 8, }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: -60 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailProduct', { idProduct: item.id })}>
              <ProductList
                productName={item.name}
                productPrice={item.price}
                source={{ uri: item.images[0].link }}
              />
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.brandNameContainer}>
          <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: 'black' }}>Shop by brand</Text>
          <FlatList
            data={brandData}
            contentContainerStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingVertical: 8 }}
            numColumns={4}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <BrandList
                brandName={item.brandName}
              />
            )}
          />
        </View>
        <View style={styles.headerText}>
          <Text style={{ alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: 'black' }}>New Product</Text>
          <Text style={{ alignSelf: 'flex-end', fontSize: 20, color: "blue", textDecorationLine:'underline', textDecorationColor:'blue' }}>See All</Text>
        </View>
        <FlatList
          data={productData}
          horizontal
          contentContainerStyle={{ padding: 8 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductList
              productName={item.name}
              productPrice={item.price}
              source={{ uri: item.images[0].link }}
            />
          )}
        />
      </View>
    </ScrollView>
  )
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 15,
  },
  brandNameContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 0.9 * width
  },
  searchHeader: {
    flexDirection: 'column'
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heartOnHeader: {
    marginBottom: 20,
    marginTop: -30
  },
  searchStyle: {
    borderRadius: 6,
    borderStyle: 'solid',
    width: 299,
    height: 40,
    padding: 6,
    backgroundColor: 'rgba(52,52,52, 0.2)',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  searchPlaceHolder: {
    width: 247,
    height: 20,
    //position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
    marginLeft: 30,
    marginBottom: 50
  }
})
export default HomeScreen