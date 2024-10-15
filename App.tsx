import React from "react";
import { View, Text } from "react-native";
import GiraffeList from "./components/GiraffeList"; // Import GiraffeList komponenten'
import DonorList from "./components/DonorList";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Velkomsttekst */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Velkommen til European Speam Banks Donor site! </Text>
      </View>

      {/* GiraffeList komponenten */}
      <View
        style={{ flex: 2, justifyContent: "flex-start", alignItems: "center" }}
      >
        <GiraffeList />
      </View>

      <View
        style={{ flex: 2, justifyContent: "flex-start", alignItems: "center" }}
      >
        <DonorList />
      </View>
    </View>
  );
};

export default App;
