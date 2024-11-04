import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles/HomeScreen.styles";
import GiraffeList from "./GiraffeList";
import QualificationStep from "./QualificationStep";
import StepComponent from "./StepComponent";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
  // Tilføjelse af navigation hook der giver adgang til navigation objektet, så der kan navigeres til andre skærme
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <QualificationStep />
        {/* Tilføj en knap, der navigerer til "Details" skærmen */}
      </ScrollView>
      {/* Vi kan senere tilføje flere elementer til Homepage her */}
    </View>
  );
};

export default HomeScreen;

/*//var tidligere indsat i view       
  <ScrollView contentContainerStyle={styles.content}>
        <StepComponent
          stepNumber={1}
          title={"Sample analysis"}
          description={"Your samples have been approved"}
          iconName={"science"}
          isCompleted={true}
        />
        <StepComponent
          stepNumber={2}
          title={"Interview & information"}
          description={"Completed by the coordinator."}
          iconName={"people"}
          isCompleted={false}
        />
        <StepComponent
          stepNumber={3}
          title={"Medical examination"}
          description={"Passed by doctor."}
          iconName={"doctor"}
          isCompleted={false}
        />
        <StepComponent
          stepNumber={4}
          title={"Blood and urin test"}
          description={"Analysis completed."}
          iconName={"bloodtype"}
          isCompleted={false}
        />
        <StepComponent
          stepNumber={5}
          title={"Donor profile"}
          description={"Profile finalized."}
          iconName={"person"}
          isCompleted={false}
        />
      </ScrollView> */
