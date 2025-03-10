
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import mainImg from '@/assets/images/iced-coffee.png'

const app = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={mainImg}
        resizeMode='cover'
        style={style.image}
      >
        <Text style={style.title}>Coffee Shop</Text>

        <Link style={{ marginHorizontal: 'auto' }} href="/menu" asChild>
          <Pressable style={style.button}>
            <Text style={style.buttonText}>Our Menu</Text>
          </Pressable>
        </Link>

        <Link style={{ marginHorizontal: 'auto' }} href="/contact" asChild>
          <Pressable style={style.button}>
            <Text style={style.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>

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
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    justifyContent: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },

})