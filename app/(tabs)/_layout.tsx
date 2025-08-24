
import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
   
  return (
  
            <Tabs >
        <Tabs.Screen //Relates to an overall screen and how it is displayed
            name='index'//here is the name of the component or file who's content is going to be displayed in the screen
            options={{
                title: "Home",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="home"  size={size} color={color}/>      
                )
            }}
        
        />

          <Tabs.Screen 
            name='exercises'//name of the file which it represents
            options={{
                title: "Exercises",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="clipboard-outline"  size={size} color={color}/> 
                    //size and color are default attributes depending 
                    //on the active state of the tab. 
                    //Better still you can define them under screenOptions     
                )
            }}
            
        
        />

        
          <Tabs.Screen 
            name='profile'//name of the file which it represents
            options={{
                title: "Profile",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name="person-outline"  size={size} color={color} /> 
                    //size and color are default attributes depending 
                    //on the active state of the tab. 
                    //Better still you can define them under screenOptions     
                )
            }}
            
        />

         <Tabs.Screen 
            name='settings'//name of the file which it represents
            options={{
                title: "Settings",
                tabBarIcon: ({color,size}) => (
                    <Ionicons name='settings' size={size} color={color}/> 
                    //size and color are default attributes depending 
                    //on the active state of the tab. 
                    //Better still you can define them under screenOptions     
                )
            }}
            
        
        />

</Tabs>


    
  )
}

export default TabsLayout

