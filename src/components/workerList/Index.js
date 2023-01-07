import { onValue, ref } from "firebase/database";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { db } from "../../firebase";
import { WorkerItem } from "./components/workerItem/Index";
import { styles } from "./Style";

export const WorkerList = () => {
  const getWorkers = () => {
    const dbRef = ref(db, "/users/");
    onValue(dbRef, (res) => {
      res.forEach((childRes) => {
        if (
          childRes.val().user == "Worker" &&
          company == childRes.val().company
        ) {
          console.log(childRes.val());
          // dispatch(
          //   add(
          //     childRes.val().user,
          //     childRes.val().userName,
          //     childRes.val().email
          //   )
          // );
        }
      });
    });
  };

  return (
    <View style={styles.wrapper}>
      
      {/* <FlatList
        // data={workers}
        renderItem={({ item }) => <WorkerItem item={item} />}
      /> */}
    </View>
  );
};
