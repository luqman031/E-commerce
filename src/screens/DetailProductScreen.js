import { StyleSheet, Text, View, Image,Button,TouchableOpacity, ScrollView} from 'react-native'
import React, {useState} from 'react'
import DetailProduct from '../components/DetailProduct'
import { productData } from '../data/productDummyData'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';


const DetailProductScreen = () => {
  const navigation = useNavigation()

  
  //const route = useRoute()
  //const { idProduct } = route.params
 /* const [product, setProduct] = useState({})

  const getProduct = () => {
    for (let i= 0; i< productData.length; i++) {
      if (idProduct == productData[i].id) {
        setProduct(productData[i])
        console.log(product)
      }
    }
  }

  useEffect(() => {
    getProduct()
  }, [])
*/
  return(
    <View>
     <Text>Detail</Text>
    
    </View>
  )
}

export default DetailProductScreen