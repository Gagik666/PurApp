import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { styles } from "./Style";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { addCompanyLocation } from "../signUp/components/modal/reducer";
import { editCurrentUser } from "../../firebase/reducer";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
export const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    getSkip();
    getLocation();
  });

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      dispatch(addCompanyLocation(latitude, longitude));
    } catch (error) {
      console.log(error);
    }
  };

  const getSkip = async () => {
    try {
      await AsyncStorage.getItem("skip").then((value) => {
        if (value === "true") {
          getToken();
        } else {
          setTimeout(() => {
            navigation.navigate("Intru");
          }, 3000);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      await AsyncStorage.getItem("token").then((value) => {
        if (value === "null" || value === null) {
          setTimeout(() => {
            navigation.navigate("SignUp");
          }, 3000);
        } else {
          loading(value);
          navigation.navigate(user);
        }
      });
    } catch (eror) {
      console.log(eror);
    }
  };

  const loading =  (uid) => {
    onValue(ref(db, "/users/" + uid), (r) => {
      dispatch(editCurrentUser(r.val()));
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.txtLogo}>P</Text>
    </View>
  );
};
