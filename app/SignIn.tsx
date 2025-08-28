import { useAuthStore } from '@/utils/authStore'
import { Button } from '@react-navigation/elements'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignIn = () => {
const { logIn } = useAuthStore(); 
const { logOut } = useAuthStore(); 


  return (
    <View style= {styles.header}>
      <Text style= {styles.header} >SignIn</Text>
      <Link asChild push href="/Modal">
          <Button > Open Modal</Button>
      </Link>
      <Button onPress={logIn}>Log in</Button>
      <Button onPress={logOut}>Log out</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    display: "flex",
    justifyContent: "center",
    padding: 4,
    color: "blue"
  }
})

export default SignIn