import { useNavigation } from "@react-navigation/native";
import { onValue, ref } from "firebase/database";
import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase";
import { selectCurrentUser } from "../../firebase/reducer";
import { editRatingList } from "../../ui/workerInfo/reducer";
import { WorkerItem } from "./components/workerItem/Index";
import { editWorkerList, selectWorkers } from "./reduser";
import { styles } from "./Style";

export const WorkerList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const workers = useSelector(selectWorkers);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    getWorkers();
  }, [currentUser.company]);

  const getWorkers = () => {
    const dbRef = ref(db, "/users/");
    onValue(dbRef, (res) => {
      res.forEach((childRes) => {
        if (
          childRes.val().user == "Worker" &&
          currentUser.company == childRes.val().company
        ) {
          dispatch(editWorkerList(childRes.val()));
        }
      });
    });
  };

  const openUserInfo = (uid) => {
    navigation.navigate("WorkerInfo", {
      uid: uid,
    });
    dispatch(editRatingList(null))
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        keyExtractor={(item) => item.uid}
        data={workers.filter((item, index, arr) => {
          return arr.map((i) => i.uid).indexOf(item.uid) === index;
        })}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openUserInfo(item.uid)}>
            <WorkerItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
