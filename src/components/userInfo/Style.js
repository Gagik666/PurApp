import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: "#26294C",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    
  },
  image: {
    width: 120,
    height: 120,
    borderWidth: 5,
    borderRadius: 100,
    backgroundColor: "#fff",
    resizeMode: "center"
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 130,
  },
  textView: {
    justifyContent: "center",
    marginStart: 15,
  },
  txtUser: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    color: "#FFF",
    textTransform: "uppercase",
  },
  txtUserName: {
    color: "#FCFCFC",
    fontWeight: "700",
    fontSize: 16,
  },
  txtEmail: {
    color: "#FFF",
    fontWeight: "400",
    fontSize: 12,
  },
});
