import React from "react";
import { Text, Image, View } from "react-native";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../firebase/reducer";
import { styles } from "./Style";

export const UserInfo = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("../../../assets/person.png")}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.txtUser}>{currentUser.user}</Text>
        <Text style={styles.txtUserName}>{currentUser.userName}</Text>
        <Text style={styles.txtEmail}>{currentUser.email}</Text>
      </View>
    </View>
  );
};
