import { useAuthStore } from "@/utils/authStore";
import { Stack } from "expo-router";
import React from "react";



export default function Layout() {
const { isLoggedIn, shouldCreateAccount, hasCompletedOnboarding} = useAuthStore();
//const isLoggedIn = false;
//const shouldCreateAccount = false;
  return (
    <React.Fragment >
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1e1e1e" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Protected  guard = {isLoggedIn}>
      <Stack.Screen name="(tabs)"  />
      </Stack.Protected>

      <Stack.Protected  guard = {!isLoggedIn && !hasCompletedOnboarding}>
         <Stack.Screen name="SignIn" options={{ title: "SignIn" }} />
         <Stack.Protected guard = {shouldCreateAccount} >
        <Stack.Screen name="CreateAccount" />
        </Stack.Protected>
      </Stack.Protected>
      
    
   <Stack.Protected  guard = {!hasCompletedOnboarding}>
                <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
          </Stack.Protected>
    </Stack>

     

    </React.Fragment>
  );
}
