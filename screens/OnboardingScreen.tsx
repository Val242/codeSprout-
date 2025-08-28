import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

type Slide = {
  key: number;
  title: string;
  text: string;
  image: any;
  backgroundColor: string;
};

const slides: Slide[] = [
  {
    key: 1,
    title: "Welcome to CodeSprout",
    text: "Learn coding with tutorials and exercises 🚀",
    image: require("../assets/1.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Interactive Learning",
    text: "Watch videos, solve exercises, and get instant feedback",
    image: require("../assets/2.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Track Your Progress",
    text: "Save your progress and favorite tutorials 📚",
    image: require("../assets/3.jpg"),
    backgroundColor: "#22bcb5",
  },
];

export default function OnboardingScreen() {
  const [showRealApp, setShowRealApp] = useState(false);

  const renderItem = ({ item }: { item: Slide }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => setShowRealApp(true);

  const renderNextButton = () => (
    <View style={styles.buttonCircle}>
      <Ionicons name="arrow-forward" color="#fff" size={24} />
    </View>
  );

  const renderDoneButton = () => (
    <View style={styles.buttonCircle}>
      <Ionicons name="checkmark" color="#fff" size={24} />
    </View>
  );

  if (showRealApp) {
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 20 }}>This is the real app 🎉</Text>
      </View>
    );
  }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      showSkipButton
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    marginTop: 15,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginVertical: 20,
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(0,0,0,.3)",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
