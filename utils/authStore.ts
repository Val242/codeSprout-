import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  isLoggedIn: boolean;
  shouldCreateAccount: boolean;
  hasCompletedOnboarding: boolean;
  logIn: () => void;
  logOut: () => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  createAccount: () => void;
  goToSignIn: () => void; // new action
};

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      shouldCreateAccount: false,
      hasCompletedOnboarding: false,
      logIn: () => {
        set((state) => ({
          ...state,
          isLoggedIn: true,
        }));
      },
      logOut: () => {
        set((state) => ({
          ...state,
          isLoggedIn: false,
        }));
      },
      completeOnboarding: () => {
        set((state) => ({
          ...state,
          hasCompletedOnboarding: true,
        }));
      },
      resetOnboarding: () => {
        set((state) => ({
          ...state,
          hasCompletedOnboarding: false,
          shouldCreateAccount: false, // reset to avoid jumping to create account
        }));
      },
      createAccount: () => {
        set((state) => ({
          ...state,
          shouldCreateAccount: true,
          hasCompletedOnboarding: true,
        }));
      },
      goToSignIn: () => {
        set((state) => ({
          ...state,
          shouldCreateAccount: false,
          hasCompletedOnboarding: true,
          isLoggedIn: false,
        }));
      },
    }),
    {
      name: "6",//auth-storage
      storage: createJSONStorage(() => ({
        getItem: (name) => SecureStore.getItemAsync(name),
        setItem: (name, value) => SecureStore.setItemAsync(name, value),
        removeItem: (name) => SecureStore.deleteItemAsync(name),
      })),
    }
  )
);
