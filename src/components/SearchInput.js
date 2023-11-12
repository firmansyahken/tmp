import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const SearchInput = () => {
  return (
    <View style={{
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 15
    }}>
        <Image 
        source={require("../assets/icon/search.png")}
        style={{
            width: 20,
            height: 20
        }}/>
        <TextInput placeholder="Cari Topik.."
        style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            height: 40,
            fontSize: 13
        }}/>
    </View>
  )
}

export default SearchInput