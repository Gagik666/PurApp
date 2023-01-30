import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { Menu } from "./src/components/menu";
import { Navigate } from "./src/navigation/Index";
import { store } from "./src/redux/store/Store";
export default function App() {
  return (
    <Provider store={store}>
      <>
      <StatusBar
      barStyle= "light-content"
      />
        <Navigate />
        <Menu />
      </>
    </Provider>
  );
}


