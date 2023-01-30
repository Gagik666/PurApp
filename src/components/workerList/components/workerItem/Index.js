import React, { useEffect, useState } from "react";
import {  Text, View, Image } from "react-native";
import { styles } from "./Style";


export const WorkerItem = ({item}) => {

  useEffect(() => {
    
    if(item.isPresent === true) {
      setStatus("Present")
    } else if (item.isAbsent == true) {
      setStatus("Absent")
    } 

  }, [])

  const [status, setStatus] = useState("")
  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("../../../../../assets/person.png")}
          />
        </View>
        <View style={styles.textView}>
          <Text style={{}}>{status}</Text>
          <Text style={styles.txtUserName}>{item.userName}</Text>
          <Text style={styles.txtEmail}>{item.email}</Text>
        </View>
      </View>
      <View style={styles.borderBottomView}></View>
    </View>
  );
};