import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { changeLocation } from "../../components/header/reduser";
import {
  selectCompany,
  selectCompanyData,
} from "../signUp/components/modal/reducer";
import { styles } from "./Style";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ref, update } from "firebase/database";
import { db } from "../../firebase";
import { selectCurrentUser } from "../../firebase/reducer";

export const Map = () => {
  const dispatch = useDispatch();
  const companyData = useSelector(selectCompanyData);
  const currentUser = useSelector(selectCurrentUser);
  const current = useSelector(selectCompany);
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(changeLocation(false));
  }, []);

  const [latitude, setLatitude] = useState(companyData.latitude);
  const [longitude, setLongitude] = useState(companyData.longitude);

  const change = () => {
    update(ref(db, "company/" + currentUser.company), {
      latitude: latitude,
      longitude: longitude,
    });
  };
  const autocorrect = () => {
    update(ref(db, "company/" + currentUser.company), {
      latitude: current.currentLatitude,
      longitude: current.currentLongitude,
    });
    navigation.navigate("Manager");
  };

  return (
    <>
      <LinearGradient
        colors={["#181A20", "#B0B9E6", "#CED2E9"]}
        style={styles.wrapper}
      >
        <View style={styles.viewTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: companyData.latitude,
            longitude: companyData.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            draggable={true}
            onDragEnd={(e) => {
              setLatitude(e.nativeEvent.coordinate.latitude);
              setLongitude(e.nativeEvent.coordinate.longitude);
            }}
          ></Marker>
          <Circle center={{ latitude, longitude }} radius={30} />
        </MapView>

        <View style={styles.viewBottom}>
          <TouchableOpacity style={styles.touchChange} onPress={() => change()}>
            <Text style={styles.btnStyle}>Change Location</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchChange}
            onPress={() => autocorrect()}
          >
            <Text style={styles.btnStyle}>Location autocorrect</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};
