import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const categories = ["Anime", "Java", "Javascript", "Python", "C ++", "C #", "HTML", "CSS", "Jquery"]

const Category = () => {
  return (
    <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        style={{
            flexDirection: "row",
            paddingVertical: 5,
            paddingHorizontal: 20
        }}>
        { categories.map((category, index) => {
            return <TouchableOpacity key={index} style={{
                backgroundColor: "#eeeeee",
                marginRight: 15,
                paddingHorizontal: 15,
                paddingVertical: 5,
                height: 25,
                borderRadius: 10
            }}>
                <Text style={{
                    fontSize: 12,
                    color: "#8D94A3"
                }}>{category}</Text>
            </TouchableOpacity>
        })}
    </ScrollView>
  )
}

export default Category