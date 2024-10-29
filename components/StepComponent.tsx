import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface StepComponentProps {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
  isActive?: boolean; // Hvis true, ændrer det stil for det aktive trin
}

const StepComponent: React.FC<StepComponentProps> = ({
  stepNumber,
  title,
  description,
  iconName,
  isActive = false,
}) => {
  return (
    <View style={styles.stepContainer}>
      {/* Linje før cirklen */}
      {stepNumber > 1 && <View style={styles.line} />}
      <TouchableOpacity style={styles.contentContainer}>
        {/* Cirkel med ikon og stepnummer */}
        <View style={[styles.circle, isActive && styles.activeCircle]}>
          <Icon name={iconName} size={24} color="#4f4f4f" />
          <Text style={styles.stepText}>Step {stepNumber}</Text>
        </View>
        {/* Tekst ved siden af cirklen */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StepComponent;

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  contentContainer: {
    flexDirection: "row", // Sørger for, at cirkel og tekst vises side om side
    alignItems: "center",
  },
  line: {
    position: "absolute",
    width: 1,
    height: 40,
    backgroundColor: "#ccc",
    left: 35, // Tilpas placeringen så linjen passer med cirklen
    top: -40, // Justér for placering mellem cirklerne
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 45,
    backgroundColor: "#f5f1d4", // farve for inaktive trin
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  activeCircle: {
    backgroundColor: "#6c8b74", // Grøn for aktive trin
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  stepText: {
    position: "absolute",
    bottom: 5,
    fontSize: 10,
    color: "#4f4f4f",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4f4f4f",
  },
  description: {
    fontSize: 12,
    color: "#4f4f4f",
  },
});
