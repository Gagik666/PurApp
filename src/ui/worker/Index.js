import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../components/header/Index";
import { UserInfo } from "../../components/userInfo/Index";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectlogOut } from "../../components/header/reduser";

import { onValue, ref, update } from "firebase/database";
import {
  getDate,
  getHours,
  getMinutes,
  getMonth,
  getFullYear,
} from "../../extensions/Time/Time";
import * as Location from "expo-location";
import { Statistick } from "../../components/statistick/Index";
import { db } from "../../firebase";
import { selectCurrentUser } from "../../firebase/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  addLocation,
  selectCompany,
  selectCompanyData,
} from "../signUp/components/modal/reducer";
import { getDistance } from "geolib";
import { WorkerButton } from "./components/button/Index";
import { editStatusButton, workerStatus } from "./reducer";

export const Worker = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const logOut = useSelector(selectlogOut);
  logOut ? navigation.navigate("SignIn") : null;
  const currentUser = useSelector(selectCurrentUser);
  const current = useSelector(selectCompany);
  const companyData = useSelector(selectCompanyData);
  const button = useSelector(workerStatus);
  useEffect(() => {
    setTimeout(() => {
      updateStatus();
    }, 300);
  });

  const updateDay = async () => {
    getLocation();
    console.log(distance());
    try {
      const uid = await AsyncStorage.getItem("token");
      if (
        currentUser.day !== getDate() &&
        distance() <= 30
      ) {
        update(ref(db, "/users/" + uid), {
          countDay: currentUser.countDay + 1,
          day: getDate(),
          isPresent : true
        });
        iCame(uid);
        dispatch(editStatusButton("I wint", "flex"));
      } else if (
        currentUser.day === getDate() &&
        distance() <= 30 &&
        currentUser.isPresent === true
      ) {
        dispatch(editStatusButton("I wint", "none"));
        update(ref(db, "/users/" + uid), {
          day: getDate(),
          isAbsent : true
        });
        iWent(uid);
      }
    } catch (error) {}
  };

  const updateStatus = async () => {
    try {
      const uid = await AsyncStorage.getItem("token");

      if (currentUser.day !== getDate()) {
        if (currentUser.isPresent === false) {
          dispatch(editStatusButton("I came", "flex"));
        }
      } else {
        if (currentUser.isPresent === true) {
          dispatch(editStatusButton("I wint", "flex"));
        }
        if (currentUser.isPresent === true && currentUser.isAbsent === true) {
          dispatch(editStatusButton("I wint", "none"));
        } 
      }
      if (currentUser.day !== getDate()) {
        if (currentUser.isPresent === true && currentUser.isAbsent === true) {
          update(ref(db, "/users/" + uid), {
            isAbsent : false,
            isPresent: false

          });
        }
      }  
    } catch (error) {}
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      dispatch(addLocation(latitude, longitude));
    } catch (error) {
      console.log(error);
    }
  };

  const distance = () => {
    return getDistance(
      {
        latitude: current.currentLatitude,
        longitude: current.currentLongitude,
      },
      { latitude: companyData.latitude, longitude: companyData.longitude }
    );
  };

  const iCame = (uid) => {
    update(ref(db, "usersInfo/" + `${uid}/` + `${getDate()}`), {
      timeICame: `${getHours()}:${getMinutes()}`,
      FullDate: `${getDate()}.${getMonth()}.${getFullYear()}`,
      userName: currentUser.userName,
      email: currentUser.email,
      timeIWent: `_ _ : _ _`,
      worked: `0:0`,
    });
  };

  const iWent = (uid) => {
    update(ref(db, "usersInfo/" + `${uid}/` + `${getDate()}`), {
      timeIWent: `${getHours()}:${getMinutes()}`,
    }).then(() => {
      loadingTime(uid);
    });
  };

  const loadingTime = (uid) => {
    onValue(ref(db, "usersInfo/" + `${uid}/` + `${getDate()}`), (r) => {
      const cam = r.val().timeICame.split(":");
      const went = r.val().timeIWent.split(":");
      const day = r.val().FullDate.split(".");
      let getDate = (string) => new Date(0, 0, 0, string[0], string[1]);
      let different = getDate(went) - getDate(cam);
      let differentRes, hours, minuts;
      if (different > 0) {
        differentRes = different;
        hours = Math.floor((differentRes % 86400000) / 3600000);
        minuts = Math.round(((differentRes % 86400000) % 3600000) / 60000);
      } else {
        differentRes = Math.abs(getDate(cam) - getDate(went));
        hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
        minuts = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
      }
      setTimeout(() => {
        update(ref(db, "usersInfo/" + `${uid}/` + `${day[0]}`), {
          worked: `${hours}:${minuts}`,
        });
      }, 5000);
    });
  };

  return (
    <>
      <LinearGradient
        colors={["#181A20", "#B0B9E6", "#CED2E9"]}
        style={styles.wrapper}
      >
        <Header />
        <UserInfo />
        <View style={styles.viewStatus}>
          <Statistick countDay={currentUser.countDay} />

          <WorkerButton
            text={button.text}
            display={button.display}
            click={updateDay}
          />
        </View>
      </LinearGradient>
    </>
  );
};
