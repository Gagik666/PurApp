import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "../ui/signUp/Index";
import { Intru } from "../ui/intru/Index";
import { SplashScreen } from "../ui/splashScreen/Index";
import { Manager } from "../ui/manager/Index";
import { SignIn } from "../ui/signIn/Index";
import { Worker } from "../ui/worker/Index";
const Stack = createNativeStackNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName  = "SplashScreen" >
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
            title: " ",
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: " ",
          }}
        />
        <Stack.Screen
          name="Manager"
          component={Manager}
          options={{
            title: " ",
          }}
        />
        <Stack.Screen
          name="Worker"
          component={Worker}
          options={{
            title: " ",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
