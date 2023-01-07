import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editMenuDisplay, logOut, selectMenuDisplay } from "../header/reduser";
import { styles } from "./Style";
import { Ionicons } from "@expo/vector-icons";
import { MenuButton } from "./components/button/Index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { selectCurrentUser } from "../../firebase/reducer";


export const Menu = () => {
  const menuDispalay = useSelector(selectMenuDisplay);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const setToken = async (uid, user) => {
    try {
      await AsyncStorage.setItem("token", uid);
      await AsyncStorage.setItem("user", user);
    } catch (eror) {
      console.log(eror);
    }
  };

  const logOutPress = () => {
    dispatch(editMenuDisplay("none"));
    dispatch(logOut(true));
    setToken("null", "null");
  };
  return (
    <>
      <TouchableOpacity
        style={[styles.menuBackground, { display: menuDispalay }]}
        onPress={() => dispatch(editMenuDisplay("none"))}
      ></TouchableOpacity>

      <View style={{ width: "100%", display: menuDispalay }}>
        <View style={styles.container}>
          <View style={styles.menuTop}>
            <TouchableOpacity
              onPress={() => {
                dispatch(editMenuDisplay("none"));
              }}
            >
              <Ionicons name="chevron-down" size={24} color="#383A69" />
            </TouchableOpacity>
            <Text style={styles.txtSetings}>Setings</Text>
            <View style={styles.menuUserInfo}>
              <Image
                style={styles.image}
                source={require("../../../assets/person.png")}
              />
              <View>
                <Text></Text>
                <Text style={styles.txtUserName}>{currentUser.userName}</Text>
                <Text style={styles.txtEmail}>{currentUser.email}</Text>
              </View>
            </View>
          </View>
          <View style={styles.menuBottom}>
            <MenuButton text="Edit profile" />
            <MenuButton text="Change location" />
            <MenuButton text="About us" />
            <MenuButton text="Log out" display="none" click={logOutPress} />
            <MenuButton text="Delete account" display="none" />
          </View>
        </View>
      </View>
    </>
  );
};
