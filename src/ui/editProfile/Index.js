import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../components/header/reduser";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { EditProfileUser } from "./components/editProfileUser/Index";
import { selectCurrentUser } from "../../firebase/reducer";
import { ref, update } from "firebase/database";
import { db } from "../../firebase";
export const EditProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentUser = useSelector(selectCurrentUser);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    dispatch(editProfile(false));
  });

  const updateInfo = () => {
    if (userName !== "") {
      update(ref(db, "/users/" + currentUser.uid), {
        userName: userName,
      }).then(() => {
        navigation.goBack();
      });
    }
  };

  return (
    <>
      <LinearGradient
        colors={["#181A20", "#B0B9E6", "#CED2E9"]}
        style={styles.wrapper}
      >
        <SafeAreaView style={{ justifyContent: "space-between" }}>
          <View style={styles.viewTop}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="chevron-left" size={24} color="#FFF" />
            </TouchableOpacity>
            <EditProfileUser nav = {() => navigation.goBack()}/>
          </View>
          <View style={styles.viewContientTop}>
            <View>
              <Text style={{ lineHeight: 21, fontWeight: "500", fontSize: 18 }}>
                Username
              </Text>
              <TextInput
                style={styles.txtInput}
                placeholder={currentUser.userName}
                placeholderTextColor={"gray"}
                keyboardType={""}
                onChangeText={(text) => setUserName(text)}
              />
            </View>
          </View>
        </SafeAreaView>
        <View style={styles.viewContientBottom}>
          <TouchableOpacity style={styles.btnUpdate} onPress={updateInfo}>
            <Text style={styles.txtUpdate}>Update</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};
