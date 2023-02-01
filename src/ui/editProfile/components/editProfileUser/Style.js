import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "35%",
    backgroundColor: "#26294C",
    alignItems: "center",    
  },
  image: {
    width: 160,
    height: 160,
    borderWidth: 5,
    borderColor: "#26294C",
    backgroundColor: "#fff",
    resizeMode: "center",
    borderRadius: 100,
    marginTop: "20%"
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 170,
  },
  btn: {
    marginTop:16
  },
  btnText: {
    fontWeight: "700",
    lineHeight: 18,
    color: "#26294C",
  }
  
});
