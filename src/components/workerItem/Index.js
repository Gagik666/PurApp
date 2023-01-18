import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../userInfo/Style";

export const WorkerItem = ({val}) => {

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("../../../assets/person.png")}
        />
      </View>
        <View style={styles.textView}>
          <Text style={styles.txtUser}>{val.status}</Text>
          <Text style={styles.txtUserName}>{val.userName}</Text>
          <Text style={styles.txtEmail}>{val.email}</Text>
        </View>
    </View>
  );
};
