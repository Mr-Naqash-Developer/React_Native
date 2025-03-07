import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import coffeeLogo from '@/assets/images/coffee-logo.jpg'

const app = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={coffeeLogo}
        resizeMode='cover'
        style={style.image}
      >
        <Text style={style.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

})