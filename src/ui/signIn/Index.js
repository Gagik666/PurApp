import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./Style";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { auth, db } from "../../firebase/index";
import { ref, onValue } from "firebase/database";
import { ValidateError } from "../../components/validateEror/Index";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logOut } from "../../components/header/reduser";
import { signInWithEmailAndPassword } from "firebase/auth";
import { editCurrentUser, selectCurrentUser } from "../../firebase/reducer";
import { Loading } from "../../components/loading/Index";
import { editLoading } from "../../components/loading/reducer";

export const SignIn = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [eye, setEye] = useState({ secret: true, icone: "eye" });
  const navigation = useNavigation();
  const validation = yup.object().shape({
    email: yup.string().email("ivalid email").required("filed is empty"),
    password: yup.string().required("filed is empty"),
  });

  const loginUser = (email, password) => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
        console.log(userCredential);
          loading(userCredential.user.uid);
          dispatch(logOut(false));
          dispatch(editLoading("none"))
          
        }
      ).catch(() => {
        dispatch(editLoading("none"))
      });
    } catch (error) {}
  };

  const loading = (uid) => {
    onValue(ref(db, "/users/" + uid), (r) => {
      dispatch(editCurrentUser(r.val()));
      navigation.navigate(r.val().user)
      setToken(uid, r.val().user);
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

  return (
    <View style={styles.wrapper}>
      <Loading />
      <View style={styles.viewTitle}>
        <Text style={styles.txtTitle}>Velcome Back!</Text>
      </View>
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
          loginUser(values.email, values.password);
          dispatch(editLoading("flex"))
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
              <Text style={styles.txtFormTitle}>Sign in</Text>
            </View>
            <ScrollView keyboardShouldPersistTaps="never">
              <View style={styles.form}>
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
                <TouchableOpacity
                  style={styles.btnLog}
                  disabled={!isValid && !dirty}
                  onPress={() => handleSubmit()}
                  keyboardType={"submeet"}
                >
                  <Text style={styles.txtLog}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUp")}
                  style={{ marginTop: 20 }}
                >
                  <Text style={styles.btnLoginNow}>Registration now</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}
      </Formik>
    </View>
  );
};
