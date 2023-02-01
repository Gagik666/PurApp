import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../userInfo/Style";

export const WorkerItem = ({val}) => {
  useEffect(() => {
    
    if(val.isPresent === true) {
      setStatus("Present")
    } else if (val.isAbsent == true) {
      setStatus("Absent")
    } 
  }, [])
  const [status, setStatus] = useState("")
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{uri: val.imgUrl}}
        />
      </View>
        <View style={styles.textView}>
          <Text style={styles.txtUser}>{status}</Text>
          <Text style={styles.txtUserName}>{val.userName}</Text>
          <Text style={styles.txtEmail}>{val.email}</Text>
        </View>
    </View>
  );
};
