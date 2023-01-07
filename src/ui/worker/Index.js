import React, { useEffect } from "react";
import {  Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../components/header/Index";
import { UserInfo } from "../../components/userInfo/Index";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectlogOut } from "../../components/header/reduser";

import { getDatabase, ref, update, onValue } from "firebase/database";
import { getDate } from "../../extensions/Time/Time";
import * as Location from "expo-location";

export const Worker = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const logOut = useSelector(selectlogOut);
  logOut ? navigation.navigate("SignIn") : null;
  const checkLocation = () => {
    const φ1 = (fixLat * Math.PI) / 180; // φ, λ in radians
    const φ2 = (fixLong * Math.PI) / 180;
    const Δφ = ((currentLat - fixLat) * Math.PI) / 180;
    const Δλ = ((currentLong - fixLong) * Math.PI) / 180;
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return 6371e3 * c;
  };

  const updateDay = () => {
    console.log(checkLocation());
    const db = getDatabase();
    if (currentUser.day !== getDate() && checkLocation() <= 400) {
      update(ref(db, "/users/" + currentUser.userId), {
        countDay: currentUser.countDay + 1,
        day: getDate(),
        status: "isPresent",
      });
      getLocation()
    }
  };
  // useEffect(() => {
  //   if (currentUser.status === "isAbsent") {
  //     alert("ok")
  //   } 
  //   if (currentUser.status === "isPresent") {
  //     alert("present")
  //   }
  // });

  const getLocation = async () => {
   
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // dispatch(currentLocation(latitude, longitude));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LinearGradient
        colors={["#181A20", "#B0B9E6", "#CED2E9"]}
        style={styles.wrapper}
      >

        <Header />
        <UserInfo />
        <TouchableOpacity onPress={() => updateDay()}>
          <Text style={{ fontSize: 32 }}>worker</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};
