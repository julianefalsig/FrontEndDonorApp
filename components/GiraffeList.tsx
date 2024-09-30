import React from "react";
import { observer } from "mobx-react-lite";
import { View, Text, FlatList } from "react-native";
import GiraffeStore from "../app/stores/GiraffeStore";

const GiraffeList = observer(() => {
  return (
    <View>
      <Text>Giraffes:</Text>
      <FlatList
        data={GiraffeStore.giraffes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
});

export default GiraffeList;
