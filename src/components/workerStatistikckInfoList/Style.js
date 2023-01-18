import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  item: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
  },
  column: {
    flex: 1,
    alignItems: "center",
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderColor: "gray",
    padding: 5,
  },
});
