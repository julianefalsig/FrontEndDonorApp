import React from "react";
import { observer } from "mobx-react-lite";
import { View, Text, FlatList } from "react-native";
import QualificationStepStore from "../app/stores/QualificationStepStore";

const QualificationStep = observer(() => {
  const { donorStep } = QualificationStepStore;

  return (
    <View>
      {donorStep.length > 0 ? (
        <FlatList
          data={donorStep}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{`Donor: ${item.firstName}`}</Text>
              <Text>{`Step Number: ${item.currentStep}`}</Text>
              <Text>{`Step Title: ${item.stepTitle}`}</Text>
              <Text>{`Is Completed: ${item.isCompleted}`}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Loading donor step...</Text>
      )}
    </View>
  );
});
export default QualificationStep;

//State - farven på det givne komponent skal være afhængig af state
