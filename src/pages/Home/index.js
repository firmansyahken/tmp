import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { Card, Hero } from '../../components'

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

const Home = () => {
  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#F4F3FF"
    }}>
        <ScrollView>
            <Hero/>
            <ScrollView style={{
                paddingHorizontal: 20,
                paddingVertical: 20
            }}>
                { data.map((post, index) => {
                    return <Card
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

export default Home