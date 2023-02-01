import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Style";
import { useDispatch } from "react-redux";
import { editMenuDisplay } from "./reduser";
import { MaterialIcons } from "@expo/vector-icons";


export const Header = ({backClic}) => {
  const dispatch = useDispatch();
  const clickMenu = () => {
    dispatch(editMenuDisplay("flex"));
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => backClic()}>
        <MaterialIcons name="chevron-left" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => clickMenu()}>
          <Ionicons name="menu" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
