import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  menuBackground: {
    backgroundColor: "rgba(0,0,0, .2)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "none",
    position: "absolute"
  },container: {
    backgroundColor: "#F2F2F2",
    width: "100%",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    marginTop: -40
  },
  menuTop: {
    height: 150,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottomWidth: 0.5,
    borderBottomColor: "#B1AEAE",
    paddingBottom: 30,
  },
  txtSetings: {
    fontWeight: "900",
    fontSize: 25,
    lineHeight: 29,
    color: "#383A69",
  },
  image: {
    width: 70,
    height: 70,
    borderWidth: 5,
    borderRadius: 100,
    borderColor: "#383A69",
    marginEnd: 15,
    backgroundColor: "#fff",
    resizeMode: "center"
  },
  menuUserInfo: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  txtUserName: {
    color: "#060A18",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
  },
  txtEmail: {
    color: "#000",
    fontWeight: "400",
    size: 10,
    lineHeight: 12,
    marginTop: 8
  },
  menuBottom: {
    alignItems: "center",
    paddingBottom: 40,
    paddingStart: 30,
  },
});
