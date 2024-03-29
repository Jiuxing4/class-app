import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
const Onboarding_3 = () => {
  const navigation=useNavigation()
  return (
   
    <View
      style={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: '95%',
            alignItems: "center",
            justifyContent: "center",
            height: '7%',
            borderRadius: 10,
            marginTop:'130%',
          }}onPress={()=>navigation.navigate('GetStarted_4')}
        >
          <Text style={{ fontSize: 20 }}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: '10%',
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            height: '7%',
            width: '95%',
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};
export default Onboarding_3;
