import { View, Text } from "react-native";
import { styles } from "./Style";
export const buttonLabel = (label) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.txt}>{label}</Text>
    </View>
  );
};
