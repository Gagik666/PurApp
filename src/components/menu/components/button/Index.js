import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./Style";
export const MenuButton = ({ text, display, click }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchView} onPress={() => click()}>
        <Text style={styles.txtText}>{text}</Text>
        <Entypo
          style={{ display: display }}
          name="chevron-small-right"
          size={24}
          color="#4B4B4B"
        />
      </TouchableOpacity>
    </View>
  );
};
