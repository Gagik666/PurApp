import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Style";
import { month } from "../../extensions/Time/Time";
import { LinearGradient } from "expo-linear-gradient";
export const Statistick = ({countDay}) => {
  const d = new Date();
  
  return (
    <View style={styles.wrapper}>
      <View
        style={styles.viewBackground}
      >
        <LinearGradient
          colors={["#11228E", "#0A65BD", "#058DD9"]}
          start={{ x: 0, y: 0 }}
          style={{
            height: 30,
            width: `${Math.round(
              (countDay * 100) / month[d.getMonth()]
            )}%`,
            borderRadius: 300,
            justifyContent: "center",
          }}
        ></LinearGradient>
      </View>
      <Text
        style={styles.txt}
      >
        {`${Math.round((countDay * 100) / month[d.getMonth()])}%`}
      </Text>
    </View>
  );
};
