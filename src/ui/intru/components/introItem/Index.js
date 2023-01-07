import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, View, Image} from "react-native";

import { styles } from "./Style";

export const IntroItem = ({ item }) => {
  const navigation = useNavigation()

  const setSkip = async () => {
    try {
      await AsyncStorage.setItem("skip", "true");
    } catch (eror) {
      console.log(eror);
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style = {styles.viewSkip}>
      <TouchableOpacity onPress={() => {navigation.navigate("SignUp"), setSkip()}}>
        <Text style={styles.txtSkip}>Skip</Text>
      </TouchableOpacity>
      </View>
      <Image source={item.image} style={styles.img} />
      <View style={styles.viewContient}>
        <Text style={styles.txtTitle}>{item.title}</Text>
        <Text style={styles.txtDescription}>{item.description}</Text>
      </View>
    </View>
  );
};
