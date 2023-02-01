import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "../ui/signUp/Index";
import { Intru } from "../ui/intru/Index";
import { SplashScreen } from "../ui/splashScreen/Index";
import { Manager } from "../ui/manager/Index";
import { SignIn } from "../ui/signIn/Index";
import { Worker } from "../ui/worker/Index";
import { WorkerInfo } from "../ui/workerInfo/Index";
import { StatistickInfo } from "../ui/statistickInfo/Index";
import { Map } from "../ui/map/Index";
import { EditProfile } from "../ui/editProfile/Index";
const Stack = createNativeStackNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            header: (props) => null,
          }}
        />
        <Stack.Screen
          name="Intru"
          component={Intru}
          options={{
            header: (props) => null,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            header: (props) => null,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            header: (props) => null,
          }}
        />
        <Stack.Screen
          name="Manager"
          component={Manager}
          options={{
            header: (props) => null,
          }}
        />
        <Stack.Screen
          name="Worker"
          component={Worker}
          options={{
            header: (props) => null,
          }}
        />
        <Stack.Screen
          name = "WorkerInfo"
          component={WorkerInfo}
          options = {{
            header: (props) => null,
          }}
        />
        <Stack.Screen
          name = "StatistickInfo"
          component={StatistickInfo}
          options = {{
            header: (props) => null,
          }}
        />
        <Stack.Screen
          name = "Map"
          component={Map}
          options = {{
            header: (props) => null,
          }}
        />
        <Stack.Screen
          name = "EditProfile"
          component={EditProfile}
          options = {{
            header: (props) => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
