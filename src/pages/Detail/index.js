import {View, Text, SafeAreaView, Image, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {ChatItem, HeaderDetail} from '../../components';
import { useNavigation } from '@react-navigation/native';

const chats = [
  {
    name: 'Todoroki',
    message: 'Setup di middleware atau ga di confignya bro',
  },
  {
    name: 'Alexander',
    message: 'Oke terimakasih gan',
  },
  {
    name: 'Todoroki',
    message: 'Yoi gan sama-sama',
  },
  {
    name: 'Alexander',
    message: 'Oke sampai jumpa di lain waktu',
  },
];

const Detail = () => {
    const navigation = useNavigation()
    return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F3FF'}}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
            style={{
                color: 'black',
                fontSize: 13,
            }}>
            Kembali
            </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <HeaderDetail />
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 30,
          }}>
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Semua Tanggapan
          </Text>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}>
          {chats.map((chat, index) => {
            return (
              <ChatItem key={index} name={chat.name} message={chat.message} />
            );
          })}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
