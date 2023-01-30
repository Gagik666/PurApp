import React, { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./Style";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { editRatingList, selectRatingLiist } from "../../ui/workerInfo/reducer";
export const Rating = ({ uid }) => {
  const ratingList = useSelector(selectRatingLiist);
  const dispatch = useDispatch();
  useEffect(() => {
    onValue(ref(db, "usersInfo/" + `${uid}/`), (r) => {
      r.forEach((i) => {
        dispatch(editRatingList(i.val().rating));
      });
    });
  }, []);


  return (
    <View style={styles.wrapper}>
      <MaterialIcons
        name="star-rate"
        size={Dimensions.get("window").width / 3.5}
        color="#ccccff"
      />
      <Text style={styles.txt}>
        {(ratingList.reduce((aggr, val) => {
          return aggr + val;
        }, 0) / ratingList.length).toFixed(1)}
      </Text>
    </View>
  );
};
