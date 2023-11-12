import { View, Text, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import SearchInput from './SearchInput';

const Hero = () => {
  return (
    <LinearGradient 
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        colors={['#4584FF', '#3909C1']}
        style={{
            paddingHorizontal: 20,
            paddingVertical: 40,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50
        }}>
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 30
        }}>
            <View>
                <Text style={{
                    color: "white",
                    fontSize: 13
                }}>Selamat Datang</Text>
                <Text style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600"
                }}>Alexander</Text>
            </View>
            <View>
                <Image 
                    source={{uri: "https://i.pinimg.com/originals/9f/59/7c/9f597c1f0e761615ad457c49d1814145.jpg"}}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 150 / 2,
                        borderColor: "white",
                        borderWidth: 2
                    }}/>
            </View>
        </View>
        <SearchInput/>
    </LinearGradient>
  )
}

export default Hero