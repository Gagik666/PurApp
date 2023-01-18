import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#CED2E9"
    },
    header: {
      flex: 1,
      paddingTop: 50,
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      alignItems: "center",
      backgroundColor: "#26294C",
      borderBottomEndRadius: 40,
      borderBottomStartRadius: 40,
    },
    txt: {
      fontWeight: "500",
      fontSize: 12,
      lineHeight: 15,
      color: "#FFF",
      textTransform: "uppercase",
    },
    viewRating: {
      width: 50,
      height: 50,
      backgroundColor: "#058DD9",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 5,
      borderColor: "#6ca5cf",
    },
    button: {
      height: 50,
      paddingHorizontal: 30,
      backgroundColor: "#26294C",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
    },
    btnTxtColor: {
      color: "#FFF",
      fontWeight: "700",
      fontSize: 18,
      lineHeight: 24,
    },
  });