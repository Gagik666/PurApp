import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 8,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
  },
  itemView: {
    width: "100%",
    flexDirection: "row",
    paddingVer: 16,
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 5,
    borderRadius: 100,
    borderColor: "#383A69",
  },
  imageView: {
    justifyContent: "center",
    borderRadius: 150,
  },
  textView: {
    justifyContent: "center",
    marginStart: 15,
  },
  infoView: {
    justifyContent: "center",
  },
  borderBottomView: {
    width: "80%",
    marginStart: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ABABC1",
  },
  txtUser: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    textTransform: "uppercase",
  },
  txtUserName: {
    fontWeight: "700",
    fontSize: 16,
  },
  txtEmail: {
    fontWeight: "400",
    fontSize: 12,
  },
});
