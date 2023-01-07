import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { Menu } from "./src/components/menu";
import { Navigate } from "./src/navigation/Index";
import { store } from "./src/redux/store/Store";
export default function App() {
  return (
    <Provider store={store}>
      <>
        <Navigate />
        <Menu />
      </>
    </Provider>
  );
}


