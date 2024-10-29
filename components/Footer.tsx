import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Hvis du bruger Expo, kan du også bruge: import { MaterialIcons } from '@expo/vector-icons';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      {/* Menu Section */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="menu" size={30} color="#4f4f4f" />
        <Text style={styles.iconText}>Menu</Text>
      </TouchableOpacity>

      {/* Appointments Section */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="event" size={30} color="#4f4f4f" />
        <Text style={styles.iconText}>Appointments</Text>
      </TouchableOpacity>

      {/* Compensation Section */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="attach-money" size={30} color="#4f4f4f" />
        <Text style={styles.iconText}>Compensation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row", // Rækker layout
    justifyContent: "space-around", // Fordel ikonerne jævnt
    alignItems: "center",
    height: 70,
    backgroundColor: "#f5f1d4", // Baggrundsfarve for footer
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0", // Lys kant for oven
  },
  iconContainer: {
    alignItems: "center", // Centrer ikoner og tekst lodret
  },
  iconText: {
    fontSize: 12,
    color: "#4f4f4f", // Farve på teksten
    marginTop: 4,
  },
});

export default Footer;
