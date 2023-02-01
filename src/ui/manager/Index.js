import React, { useCallback } from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./Style";
import { UserInfo } from "../../components/userInfo/Index";
import { WorkerList } from "../../components/workerList/Index";
import { Header } from "../../components/header/Index";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  selectChangeLocation,
  selectEditProfile,
  selectlogOut,
} from "../../components/header/reduser";
import { useBackHandler } from "@react-native-community/hooks";
import { StatusBar } from "react-native";

export const Manager = () => {
  const logOut = useSelector(selectlogOut);
  const changeLocation = useSelector(selectChangeLocation);
  const editProfile = useSelector(selectEditProfile);
  const navigation = useNavigation();
  logOut ? navigation.navigate("SignUp") : null;
  changeLocation ? navigation.navigate("Map") : null;
  editProfile ? navigation.navigate("EditProfile") : null;
  
  return (
    <>
      
      <LinearGradient
        colors={["#181A20", "#B0B9E6", "#CED2E9"]}
        style={styles.wrapper}
      >
        <Header backClic = {() => {}} />
        <UserInfo />
        <WorkerList />
      </LinearGradient>
    </>
  );
};
