import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CardAccount = (props) => {
  return (
    <View style={{
        backgroundColor: "white",
        paddingHorizontal: 18,
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 20
    }}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
            }}>
                <Image 
                source={{uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1615295972i/30985332._SY540_.jpg"}}
                style={{
                    width: 30,
                    height: 30,
                    borderRadius: 150 / 2,
                    borderColor: "#4584FF",
                    borderWidth: 2,
                    marginRight: 10,
                }}/>
                <Text style={{
                    fontSize: 13,
                    fontWeight: "600",
                    color: "#8D94A3"
                }}>{props.date}</Text>
            </View>
            <View style={{
                flexDirection: "row",
            }}>
                <TouchableOpacity>
                    <Text style={{
                        fontSize: 13,
                        color: "#8D94A3",
                        marginRight: 10
                    }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                        fontSize: 13,
                        color: "#8D94A3"
                    }}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Text style={{
            fontSize: 13,
            fontWeight: "bold",
            color: "black",
            paddingVertical: 10
        }}>{props.title}</Text>
        <Text style={{
            fontSize: 11,
            color: "#8D94A3"
        }}>{props.content}</Text>
        <View style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Image 
                source={require("../assets/icon/comment.png")}
                style={{
                    width: 20,
                    height: 20,
                    marginRight: 5
                }}/>
                <Text style={{
                    fontSize: 12,
                    color: "black"
                }}>12</Text>
            </View>
            <TouchableOpacity>
                <Text style={{
                    fontSize: 12,
                    color: "#4584FF"
                }}>Lihat Jawaban</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CardAccount