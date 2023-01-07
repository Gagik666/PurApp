import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#CED2E9",
    paddingTop: Platform.OS == "ios" ? 45 : 0
  },
  itemView: {
    width: "85%",
    flexDirection: "row",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  infoView: {
    justifyContent: "center",
  },
  borderBottomView: {
    width: "60%",
    borderBottomWidth: 1,
    borderBottomColor: "#ABABC1",
  },
  txtEmail: {
    fontWeight: "400",
    fontSize: 12,
  },
  touch: {
    width: 40,
    height: 40,
    backgroundColor: "#058DD9",
    borderRadius: 50,
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#6ca5cf",
  },
  txtAdd: {
    fontSize: 30,
    lineHeight: 36,
    color: "#FFF",
    textAlign: "center",
    marginTop: -5,
  },
});
