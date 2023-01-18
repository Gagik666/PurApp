import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import {useSelector} from "react-redux"
import { selectLoading } from "./reducer";

export const Loading = () => {

  const LoadingDisplay = useSelector(selectLoading)

  return (
    <View
      style={[StyleSheet.absoluteFill, styles.container, { display: LoadingDisplay }]}
    >
      <ActivityIndicator size="large" color="#08E8DE" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
});
