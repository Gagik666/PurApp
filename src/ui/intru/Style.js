import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#26294C",
  },
  viewSkip: {
    flex: 0.2,
  },
  viewBottom: {
    width: "100%",
    height: "30%",
    backgroundColor: "#CED2E9",
    borderTopStartRadius: 70,
    borderTopEndRadius: 70,
    alignItems: "center",
  },
  viewBottomIcone: {
    width: "10%",
    height: 5,
    borderRadius: 100,
    marginTop: 16,
    backgroundColor: "white",
  },
  viewAppIntroSlider: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingTop: 100,
  },
});
