import { useAuthStore } from "@/utils/authStore";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import React from "react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});


export default function Layout() {
  const { isLoggedIn, shouldCreateAccount, hasCompletedOnboarding } = useAuthStore();

  return (
     <ConvexProvider client={convex}>
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1e1e1e" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      {/* Main app after login */}
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>

      {/* Onboarding flow */}
      <Stack.Protected guard={!hasCompletedOnboarding}>
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
      </Stack.Protected>

      {/* Create account after onboarding */}
      <Stack.Protected guard={shouldCreateAccount && hasCompletedOnboarding}>
        <Stack.Screen name="CreateAccount" />
      </Stack.Protected>

      {/* SignIn for returning users */}
      <Stack.Protected guard={!isLoggedIn && hasCompletedOnboarding && !shouldCreateAccount}>
        <Stack.Screen name="SignIn" options={{ title: "SignIn" }} />
      </Stack.Protected>
    </Stack>
    </ConvexProvider>
  );
}
