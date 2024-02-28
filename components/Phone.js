import { Text, View, TextInput, requireNativeComponent } from "react-native";
export default phone = () => {
  return (
    <View>
      <Text> Full Name</Text>
      <TextInput
        placeholder="Your Name"
        style={{ borderWidth: 1, borderColor: "gray",paddingHorizontal:15,borderRadius:7 }}
      />
      <Text> Phone Number</Text>
      <TextInput
        placeholder="Your Name"
        style={{ borderWidth: 1, borderColor: "gray", paddingHorizontal:15,borderRadius:7 }}
      />
      <Text> password</Text>
      <TextInput
        placeholder="Your Name"
        style={{ borderWidth: 1, borderColor: "gray",paddingHorizontal:15,borderRadius:7  }}
      />
      <Text> Comfirm Password</Text>
      <TextInput
        placeholder="Your Name"
        style={{ borderWidth: 1, borderColor: "gray",paddingHorizontal:15,borderRadius:7  }}
      />
    </View>
  );
};
