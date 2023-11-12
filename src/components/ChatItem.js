import {View, Text, Image} from "react-native";
import React from "react";

const ChatItem = (props) => {
    return (
    <View style={{
        marginBottom: 30
    }}>
      <View
        style={{
          flexDirection: props.name === "Alexander" ? "row-reverse" : "row",
          alignItems: "center",
        }}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/9f/59/7c/9f597c1f0e761615ad457c49d1814145.jpg",
          }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 150 / 2,
            borderColor: "#4584FF",
            borderWidth: 2,
            marginRight: 10,
          }}
        />
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
            color: "black",
            marginRight: 10
          }}>
          { props.name === "Alexander" ? "You" : props.name }
        </Text>
      </View>
      <View
        style={{
          marginTop: 15,
          backgroundColor: props.name === "Alexander" ? "#4584FF" : "white",
          paddingHorizontal: 15,
          paddingVertical: 10,
          width: "auto",
          borderRadius: 10,
          alignSelf: props.name === "Alexander" ? "flex-end" : "flex-start",
        }}>
        <Text style={{
            fontSize: 11,
            minWidth: "20%",
            maxWidth: "80%",
            color: props.name === "Alexander" ? "#ffffff" : "#8D94A3"
        }}>{props.message}</Text>
      </View>
      <View
        style={{
          width: "auto",
          maxWidth: "80%",
          alignSelf: props.name === "Alexander" ? "flex-start" : "flex-end",
          marginTop: 5,
        }}>
        <Text
          style={{
            fontSize: 11,
            color: "#8D94A3",
          }}>
          12 Juni 2022
        </Text>
      </View>
    </View>
  );
};

export default ChatItem;
