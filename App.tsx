import React from "react";
import { View, Text } from "react-native";
import GiraffeList from "./components/GiraffeList"; // Import GiraffeList komponenten

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Velkomsttekst */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to my React Native App! Hej Eva! </Text>
      </View>

      {/* GiraffeList komponenten */}
      <View
        style={{ flex: 2, justifyContent: "flex-start", alignItems: "center" }}
      >
        <GiraffeList />
      </View>
    </View>
  );
};

export default App;
