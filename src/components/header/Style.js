import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#26294C",
        width: "100%",
        paddingTop: Platform.OS === "ios" ? 50 : 10,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.4,
        paddingBottom: 8,
      },
      topLineView: {
        backgroundColor: 'black',
        width: 100,
        height: 10
      }
})