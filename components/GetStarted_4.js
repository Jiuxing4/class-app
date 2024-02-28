import { Text, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";
import Email from './Email'
import Phone from './Phone'
import Checkbox from "expo-checkbox";

const LocationPermit = () => {
  const [toggle, setToggle] = useState("Email");
  const handleToggle = (next) => {
    setToggle(next);
  };
  const [Checked, setChecked]= useState(false);
  return (
    <View style={{ backgroundColor: "red", height: "100%", paddingTop: 10 }}>
      <Image
        source={require("../assets/logoicon.png")}
        style={{
          height: "10%",
          justifyContent: "center",
          width: 125,
          marginTop: 25,
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          height: "90%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          padding: 20,
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 25 }}>Get Started</Text>
        <Text style={{ marginTop: 10 }}>
          Sign up Today and Start Placing your Order
        </Text>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "red",
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          {/* Email */}
          <TouchableOpacity
            style={{
              backgroundColor: toggle == "Email" ? "red" : "white",
              paddingHorizontal: 16,
              paddingVertical: 14,
              width: "50%",
              borderTopLeftRadius: 7,
              borderBottomLeftRadius: 7,
            }}
            onPress={() => handleToggle("Email")}
          >
            <Text>Email Address</Text>
          </TouchableOpacity>
          {/* Phone number */}
          <TouchableOpacity
            style={{
              backgroundColor: toggle == "Phone" ? "red" : "white",
              paddingHorizontal: 16,
              paddingVertical: 14,
              width: "50%",
              borderTopRightRadius: 7,
              borderBottomRightRadius: 7,
            }}
            onPress={() => handleToggle("Phone")}
          >
            <Text>Phone Number</Text>
          </TouchableOpacity>
        </View>
        {toggle == "Email" ? <Email/> : <Phone/>} 
        <View>
          <Checkbox
          value={Checked}
          onValueChange={setChecked}
          color={Checked ? 'red' : 'blue'}
          />
        </View>
      </View>
    </View>
  );
};
export default LocationPermit;
