import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";
import HomeScreen from "./components/HomeScreen";
import Background from "./components/Background";
import Footer from "./components/Footer";
import StepComponent from "./components/StepComponent";
import { ScrollView } from "react-native";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import DetailsScreen from "./components/DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./components/styles/types";

const Stack = createStackNavigator<RootStackParamList>();

//export default function App() {
const App: React.FC = () => {
  return (
    <Background>
      <NavigationContainer>
        <Header />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </Background>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Sørg for, at footeren placeres nederst,,
  },
  content: {
    padding: 16,
  },
});
