import { StyleSheet,Dimensions } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },
  viewContient: { alignItems: "center", margin: 4 },
  txtTitle: {
    color: "#17223B",
    fontSize: 24,
    width: "100%",
    fontWeight: "800",
    marginBottom: 16,
  },
  txtDescription: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
    color: "rgba(38, 56, 89, 0.6)",
  },
  viewSkip: { width: Dimensions.get("window").width },
  txtSkip: {
    color: "#6B778D",
    textAlign: "right",
    marginEnd: 50,
    fontWeight: "700",
  },
});
