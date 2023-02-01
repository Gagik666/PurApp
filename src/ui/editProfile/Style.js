import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 32,
  },
  viewTop: {
    width: "100%",
    backgroundColor: "#26294C",
    justifyContent: "center",
    paddingStart: 10,
  },
  viewContientTop: {
    padding: 16
  },
  viewContientBottom: {
    alignItems: "center"
  },
  txt: {
    fontVariant: "500"
  }
  ,
  txtInput: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
    height: 50,
    marginTop: 8,
    paddingStart: 16,
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
  },
  btnUpdate: {
    height: 50,
    paddingHorizontal: 70,
    backgroundColor: "#26294C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  txtUpdate: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24,
  },
});
