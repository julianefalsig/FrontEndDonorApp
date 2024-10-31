import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles/HomeScreen.styles";
import GiraffeList from "./GiraffeList";
import QualificationStep from "./QualificationStep";
import StepComponent from "./StepComponent";

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      {/*       <ScrollView contentContainerStyle={styles.content}>
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
      </ScrollView> */}
      <ScrollView contentContainerStyle={styles.content}>
        <QualificationStep />
      </ScrollView>
      {/* Tilføj flere elementer eller indhold til homescreen her */}
    </View>
  );
};

export default HomePage;
