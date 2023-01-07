import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useSelector } from "react-redux";
import { IntroItem } from "./components/introItem/Index";
import { selectIntro } from "./reduser";
import { styles } from "./Style";
import { buttonLabel } from "./components/buttonLabel";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Intru = () => {
  slides = useSelector(selectIntro);
  const navigation = useNavigation();

  const setSkip = async () => {
    try {
      await AsyncStorage.setItem("skip", "true");
    } catch (eror) {
      console.log(eror);
    }
  };
  return (
    <>
      <View style={styles.wrapper}>
        <View></View>
        <View style={styles.viewBottom}>
          <View style={styles.viewBottomIcone}></View>
        </View>
      </View>

      <View style={styles.viewAppIntroSlider}>
        <AppIntroSlider
          data={slides}
          renderItem={({ item }) => {
            return <IntroItem item={item} />;
          }}
          activeDotStyle={{
            backgroundColor: "#17223B",
            width: 30,
          }}
          showPrevButton
          renderNextButton={() => buttonLabel("Next")}
          renderPrevButton={() => buttonLabel("Prev")}
          renderDoneButton={() => buttonLabel("Next")}
          onDone={() => {navigation.navigate("SignUp"), setSkip()}}
        />
      </View>
    </>
  );
};
