import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./Style";
import { UserInfo } from "../../components/userInfo/Index";
import { WorkerList } from "../../components/workerList/Index";
import { Header } from "../../components/header/Index";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectlogOut } from "../../components/header/reduser";
export const Manager = () => {

  const logOut = useSelector(selectlogOut)
  const navigation = useNavigation()
  logOut ? navigation.navigate("SignUp"): null

    
  return (
    <>
      <LinearGradient
        colors={["#181A20", "#B0B9E6", "#CED2E9"]}
        style={styles.wrapper}
      >
        <Header />
        <UserInfo />
        <WorkerList />
        <Text style={{ fontSize: 32 }}>manager</Text>
      </LinearGradient>
    </>
  );
};
