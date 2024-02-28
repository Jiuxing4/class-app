import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import Location from "./components/Location";
import Onboarding_1 from"./components/Onboarding_1"
import Onboarding_2 from "./components/Onboarding_2";
import Onboarding_3 from "./components/Onboarding_3";
import GetStarted_4 from "./components/GetStarted_4";
import Test from "./components/Test";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Duolingo from "./components/Duolingo";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Duolingo" component={Duolingo} options={{headerShown:false}} />
        <Stack.Screen name="Location" component={Location} options= {{headerShown:false}} />
        <Stack.Screen name="Onboarding_1" component={Onboarding_1} options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding_2" component={Onboarding_2} options={{headerShown:false}}/>
        <Stack.Screen name="Onboarding_3" component={Onboarding_3} options={{headerShown:false}}/>
        <Stack.Screen name="GetStarted_4" component={GetStarted_4} options={{headerShown:false}}/>
        <Stack.Screen name="Test" component={Test} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
