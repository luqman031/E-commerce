import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { productData } from '../data/productDummyData';
import ProductList from '../components/ProductList';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


const ListProductScreen = () => {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.searchHeader}>
            <View style={styles.searchStyle}>
              <Icon
                style={{ alignItems: 'flex-start' }}
                name="search"
                type="ionicon"
                color="gray"
              />
              <Text style={styles.searchPlaceHolder}> Search for item</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={productData}
          numColumns={2}
          contentContainerStyle={{ padding: 8 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{}}>
              <ProductList
                productName={item.name}
                productPrice={item.price}
                source={{ uri: item.images[0].link }}
              />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default ListProductScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 15,
  },
  searchHeader: {
    flexDirection: 'column'
  },
  searchStyle: {
    borderRadius: 6,
    borderStyle: 'solid',
    width: 355,
    height: 40,
    padding: 6,
    backgroundColor: 'rgba(52,52,52, 0.2)',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  searchPlaceHolder: {
    width: 300,
    height: 20,
    //position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
    marginLeft: 30,
    marginBottom: 50
  }
});
