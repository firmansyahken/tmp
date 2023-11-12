import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { PencilIcon } from '../../assets'
import { CardAccount } from '../../components'

const data = [
    {
        name: "Midoriya",
        date: "20 Juni 2022",
        title: "Error CORS di laravel 8",
        content: "Bagaimana cara mengatasi error CORS di laravel 8? Mohon  batuannya semua"
    },
    {
        name: "Kageyama",
        date: "19 Juni 2022",
        title: "Kapan Haikyu Season Terbaru Rilis?",
        content: "Saya sudah menunggu lama season terbaru haikyu, kira-kira ada yang tau ga kapan akan rilis?"
    },
    {
        name: "Kageyama",
        date: "19 Juni 2022",
        title: "Kapan Haikyu Season Terbaru Rilis?",
        content: "Saya sudah menunggu lama season terbaru haikyu, kira-kira ada yang tau ga kapan akan rilis?"
    }
]

const Account = () => {
  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#F4F3FF"
    }}>
        <ScrollView>
            <LinearGradient 
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
            colors={['#4584FF', '#3909C1']}
            style={{
                paddingHorizontal: 20,
                paddingVertical: 40,
                alignItems: "center"
            }}>
                <Image 
                source={{uri: "https://i.pinimg.com/originals/9f/59/7c/9f597c1f0e761615ad457c49d1814145.jpg"}}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 150 / 2,
                    borderWidth: 3,
                    borderColor: "white"
                }}
                />
                <Text style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 10
                }}>Alexander Houtaru</Text>
                <Text style={{
                    color: "white",
                    fontSize: 13
                }}>Tetap galau meskipun happy</Text>
                <TouchableOpacity style={{
                    marginTop: 15,
                    borderWidth: 2,
                    borderColor: "white",
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius: 10,
                    alignItems: "center",
                }}>
                    <PencilIcon/>
                    <Text style={{
                        color: "white",
                        fontSize: 13,
                        marginLeft: 5
                    }}>Edit Profile</Text>
                </TouchableOpacity>
            </LinearGradient>
            <ScrollView style={{
                paddingHorizontal: 20,
                paddingVertical: 30
            }}>
                { data.map((post, index) => {
                    return <CardAccount
                        key={index}
                        name={post.name}
                        date={post.date}
                        title={post.title}
                        content={post.content}
                    />
                })}
            </ScrollView>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Account