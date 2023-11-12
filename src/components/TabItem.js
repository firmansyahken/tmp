import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { HomeIcon, HomeIconActive, PostIcon, PostIconActive, ForumIcon, ForumIconActive, UserIcon, UserIconActive } from "../assets";

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    const Icon = () => {
        if(label === "Home") return isFocused ? <HomeIconActive/> : <HomeIcon/>
        if(label === "Post") return isFocused ? <PostIconActive/> : <PostIcon/>
        if(label === "Forum") return isFocused ? <ForumIconActive/> : <ForumIcon/>
        if(label === "Account") return isFocused ? <UserIconActive/> : <UserIcon/>
        return <HomeIcon/>
    }
    return (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
            flex: 1,
            alignItems: "center"
        }}>
        <Icon/>
    </TouchableOpacity>
  )
}

export default TabItem