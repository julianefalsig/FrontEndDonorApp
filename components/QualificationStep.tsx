import React from "react";
import { observer } from "mobx-react-lite";
import { View, Text, FlatList } from "react-native";
import QualificationStepStore from "../app/stores/QualificationStepStore";
import StepComponent from "./StepComponent";

const QualificationStep = observer(() => {
  const { donorStep } = QualificationStepStore;

  console.log(donorStep);

  const getIconName = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return "science"; // Ikon for trin 1
      case 2:
        return "people"; // Ikon for trin 2
      case 3:
        return "hospital"; // Ikon for trin 3
      case 4:
        return "bloodtype"; // Ikon for trin 3
      default:
        return "flag"; // Standardikon
    }
  };

  return (
    <View>
      {donorStep.length > 0 ? (
        <FlatList
          data={donorStep}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            /*             <View>
              <Text>{`Donor: ${item.firstName}`}</Text>
              <Text>{`Step Number: ${item.currentStep}`}</Text>
              <Text>{`Step Title: ${item.stepTitle}`}</Text>
              <Text>{`Is Completed: ${item.completed}`}</Text>
            </View> */

            <StepComponent
              stepNumber={item.currentStep} // Trinnummer fra databasen
              title={item.stepTitle} // Titel fra databasen
              description={`Beskrivelse af trin ${item.currentStep}`} // Beskrivelse, som kan være dynamisk
              isCompleted={item.completed} // Aktiv status fra databasen
              iconName={getIconName(item.currentStep)} // Dynamisk ikonnavn
            />
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
