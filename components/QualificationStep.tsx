import React from "react";
import { observer } from "mobx-react-lite";
import { View, Text, FlatList } from "react-native";
import QualificationStepStore from "../app/stores/QualificationStepStore";

const QualificationStep = observer(() => {
  return (
    <View>
      <Text>The fetched donor:</Text>
      <FlatList
        data={QualificationStepStore.donorStep}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
});

export default QualificationStepStore;
