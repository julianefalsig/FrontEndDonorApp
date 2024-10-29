import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";
import HomeScreen from "./components/HomeScreen";
import Background from "./components/Background";
import Footer from "./components/Footer";
import StepComponent from "./components/StepComponent";
import { ScrollView } from "react-native";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Background>
      <Header />
      <HomeScreen />
      <Footer />
    </Background>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Sørg for, at footeren placeres nederst
  },
  content: {
    padding: 16,
  },
});
