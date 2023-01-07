import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Style";
import { useDispatch } from "react-redux";
import { editMenuDisplay } from "./reduser";

export const Header = () => {
  const dispatch = useDispatch();
  const clickMenu = () => {
    dispatch(editMenuDisplay("flex"));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>not</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => clickMenu()}>
          <Ionicons name="menu" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
