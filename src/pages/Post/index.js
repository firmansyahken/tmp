import { View, Text, SafeAreaView, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'


const Post = () => {

    return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#F4F3FF"
    }}>
        <ScrollView>
            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 20
            }}>
                <Text style={{
                    fontSize: 18,
                    color: "black",
                    fontWeight: "bold"
                }}>Buat Pertanyaan</Text>
            </View>
            <View style={{
                marginTop: 30,
                paddingHorizontal: 20,
                paddingVertical: 20
            }}>
                <View style={{
                    marginBottom: 20
                }}>
                    <Text style={{
                        color: "black",
                        fontSize: 13,
                        marginBottom: 10
                    }}>Kategori Topik</Text>
                    <TextInput style={{
                        backgroundColor: "white",
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        height: 40,
                        fontSize: 13,
                        borderRadius: 15
                    }}/>
                </View>
                <View style={{
                    marginBottom: 20
                }}>
                    <Text style={{
                        color: "black",
                        fontSize: 13,
                        marginBottom: 10
                    }}>Judul Topik</Text>
                    <TextInput style={{
                        backgroundColor: "white",
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        height: 40,
                        fontSize: 13,
                        borderRadius: 15
                    }}/>
                </View>
                <View style={{
                    marginBottom: 20
                }}>
                    <Text style={{
                        color: "black",
                        fontSize: 13,
                        marginBottom: 10
                    }}>Konten</Text>
                    <TextInput 
                    multiline={true}
                    numberOfLines={8}
                    style={{
                        textAlignVertical: "top",
                        backgroundColor: "white",
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        fontSize: 13,
                        borderRadius: 15
                    }}/>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: "#4584FF",
                    width: "auto",
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    alignItems: "center",
                    borderRadius: 15
                }}>
                    <Text style={{
                        color: "white",
                        fontSize: 15,
                        fontWeight: "bold"
                    }}>Tambah</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Post