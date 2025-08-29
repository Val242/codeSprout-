import { useAuthStore } from '@/utils/authStore'
import { Button } from '@react-navigation/elements'

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FinalScreen = () => {

    const { completeOnboarding } = useAuthStore()

  return (
    <View style= {styles.header}>
      <Text style= {styles.header} >Onboarding Screen 1</Text>
      
          <Button onPress ={completeOnboarding} > Start Using App</Button>
      
      
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

export default FinalScreen