import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { styles } from "./Style";
import * as yup from "yup";
import { ValidateError } from "../../components/validateEror/Index";
import { firebase, db, auth } from "../../firebase/index";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "../../components/switch/Index";

import { ModalWidow } from "./components/modal/iIdex";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { onValue, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  selectInputVisible,
  selectSvitch,
  selectUser,
} from "../../components/switch/reduser";
import { addLocation, selectCompany } from "./components/modal/reducer";
import { logOut } from "../../components/header/reduser";
import { editCurrentUser } from "../../firebase/reducer";
import { getDate } from "../../extensions/Time/Time";
import * as Location from "expo-location";
import { Loading } from "../../components/loading/Index";
import { editLoading } from "../../components/loading/reducer";

export const SignUp = () => {



  const [eye, setEye] = useState({ secret: true, icone: "eye" });
  const dispatch = useDispatch();
  const navigation = useNavigation();


  useEffect(() => {
    dispatch(logOut(false));
  }, [])

  const inputhVisible = useSelector(selectInputVisible);
  const initialSwitch = useSelector(selectSvitch);
  const user = useSelector(selectUser);
  const company = useSelector(selectCompany);
  const validate = [yup.string(), yup.string().required("filed is empty")];
  const validation = yup.object().shape({
    userName: yup.string().required("filed is empty"),
    email: yup.string().email("ivalid email").required("filed is empty"),
    password: yup.string().required("filed is empty"),
    companyName: validate[initialSwitch],
  });
  const creatUser = (userName, email, password, company) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        addUserData(userName, email, company, userCredential.user.uid);
      }
    );
  };

  const addUserData = (userName, email, company, uid) => {
    set(ref(db, "users/" + uid), {
      uid: uid,
      userName: userName,
      email: email,
      company: company,
      user: user,
      isAbsent: false,
      isPresent: false,
      day: 0,
      dayRating: 1,
      countDay: 0,
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/pourapp-c2b3e.appspot.com/o/users%2Fperson.png?alt=media&token=3ed2d1ea-9d1b-4440-bfc8-8e5e8cb2a33e"
    })
      .then(() => {
        setToken(uid, user);
        loading(uid);
        initialSwitch
          ? createCompanyLocation(company)
          : creatUserInfo(uid, userName, email)
        initialSwitch
          ? navigation.navigate("Manager")
          : navigation.navigate("Worker");
        dispatch(editLoading("none"));
      })
      .catch(() => {
        dispatch(editLoading("none"));
      });
  };

  const loading = (uid) => {
    onValue(ref(db, "/users/" + uid), (r) => {
      dispatch(editCurrentUser(r.val()));
    });
  };

  const setToken = async (uid, user) => {
    try {
      await AsyncStorage.setItem("token", uid);
      await AsyncStorage.setItem("user", user);
    } catch (eror) {
      console.log(eror);
    }
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

  const createCompanyLocation = (companyN) => {
    set(ref(db, "company/" + companyN), {
      companyName: companyN,
      latitude: company.currentLatitude,
      longitude: company.currentLongitude,
    });
  };

  const creatUserInfo = (uid, userName, email) => {
    set(ref(db, "usersInfo/" + `${uid}/` + `${getDate()}`), {
      userName: userName,
      email: email,
      timeICame: `_ _ : _ _`,
      timeIWent: `_ _ : _ _`,
      worked: `_ _ : _ _`,
      FullDate: `_ . _ . _`,
      rating: 0,
    });
  };

  return (
    <View style={styles.wrapper}>
      <Loading />
      <View style={styles.viewTitle}>
        <Text style={styles.txtTitle}>Create Account!</Text>
      </View>
      <ModalWidow />
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          companyName: "",
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: "" });
          creatUser(
            values.userName,
            values.email,
            values.password,
            initialSwitch ? values.companyName : company.companyName
          );
          getLocation();
          dispatch(logOut(false));
          dispatch(editLoading("flex"));
        }}
        validationSchema={validation}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <View style={styles.form}>
            <View style={styles.viewFormTitle}>
              <Text style={styles.txtFormTitle}>Sign up</Text>
            </View>
            <ScrollView keyboardShouldPersistTaps="never">
              <View style={styles.form}>
                <View style={styles.viewInput}>
                  <TextInput
                    style={styles.txtInput}
                    placeholder="User name"
                    placeholderTextColor={"gray"}
                    keyboardType={""}
                    name="userName"
                    onChangeText={handleChange("userName")}
                    onBlur={handleBlur("userName")}
                    value={values.userName}
                  />
                  {touched.userName && errors.userName && (
                    <ValidateError error={errors.userName} />
                  )}
                </View>
                <View style={styles.viewInput}>
                  <TextInput
                    style={styles.txtInput}
                    placeholder="email"
                    placeholderTextColor={"gray"}
                    keyboardType={"email-address"}
                    name="email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    autoCapitalize="none"
                  />
                  {touched.email && errors.email && (
                    <ValidateError error={errors.email} />
                  )}
                </View>
                <View style={styles.viewInput}>
                  <TextInput
                    style={styles.txtInput}
                    placeholder="Password"
                    secureTextEntry={eye.secret}
                    placeholderTextColor={"gray"}
                    keyboardType={"visible-password"}
                    name="password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  <TouchableOpacity
                    style={styles.btnEye}
                    onPress={() => {
                      eye.secret
                        ? setEye({ secret: false, icone: "eye-off" })
                        : setEye({ secret: true, icone: "eye" });
                    }}
                  >
                    <Ionicons name={eye.icone} size={24} color={"black"} />
                  </TouchableOpacity>
                  {touched.password && errors.password && (
                    <ValidateError error={errors.password} />
                  )}
                </View>
                <View style={[styles.viewInput, { display: inputhVisible }]}>
                  <TextInput
                    style={styles.txtInput}
                    placeholder="Company name"
                    placeholderTextColor={"gray"}
                    keyboardType={""}
                    name="companyName"
                    onChangeText={handleChange("companyName")}
                    onBlur={handleBlur("companyName")}
                    value={values.companyName}
                  />
                  {touched.companyName && errors.companyName && (
                    <ValidateError error={errors.companyName} />
                  )}
                </View>
                <Switch />
                <TouchableOpacity
                  style={styles.btnReg}
                  disabled={!isValid && !dirty}
                  onPress={() => {
                    handleSubmit();
                  }}
                  keyboardType={"submeet"}
                >
                  <Text style={styles.txtReg}>Registration</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("SignIn")}
                  style={{ marginTop: 20 }}
                >
                  <Text style={styles.btnLoginNow}>Login now</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
      </Formik>
    </View>
  );
};
