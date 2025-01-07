import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BrandList = (props) => {
    const { brandName } = props
    return (
        <View style={styles.mainContainer}>
            <Text style={{ fontSize: 15,padding:4,color: "black", alignSelf:'flex-start', borderWidth:1, borderRadius:8 }}>{brandName}</Text>
        </View>

    )
}

export default BrandList

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 5,
    },
})