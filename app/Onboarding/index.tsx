import { Button } from '@react-navigation/elements'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Index = () => {



  return (
    <View style= {styles.header}>
      <Text style= {styles.header} >Onboarding Screen 1</Text>
      <Link asChild push href="/Onboarding/FinalScreen">
          <Button > Go to screen 2</Button>
      </Link>
      
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

export default Index