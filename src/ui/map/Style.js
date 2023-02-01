import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#CED2E9",
  },
  viewTop: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "#26294C",
    justifyContent: "center",
    paddingStart: 10,
    marginBottom: -25
  },
  viewContient: {
    flex: 4,
    width: "100%",
    backgroundColor: "red",
  },
  viewBottom: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  map: {
    flex: 2,
    width: "100%",
    height: "100%",
    borderRadius: 30,

    zIndex: 1,
  },
  btnStyle: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24,
  },
  touchChange: {
    height: 50,
    paddingHorizontal: 30,
    backgroundColor: "#26294C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
