import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Onboarding_2 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "auto",
      }}
    >
      <TouchableOpacity
        style={{
          marginTop: "40%",
          height: "10%",
        }}
        onPress={() => navigation.navigate("GetStarted_4")}
      >
        <Text
          style={{
            marginTop: "-20%",
            left: 150,
            fontSize: 17,
            fontWeight: 600,
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginTop: "-30%",
          alignItems: "center",
          justifyContent: "center",
          height: "90%",
          width: "100%",
        }}
      >
        <Image
          style={{
            height: "35%",
            width: "66%",
            margin: "auto",
            left: -7,
          }}
          source={require("./../assets/food.png")}
        />

        <Text
          style={{
            marginTop: "10%",
            textAlign: "center",
            fontSize: 20,
            fontWeight: 900,
          }}
        >
          Discover New Cuisines
        </Text>

        <Text
          style={{
            marginTop: "3%",
            fontSize: 18,
            textAlign: "center",
            alignSelf: "center",
            height: 90,
            justifyContent: "space-evenly",
          }}
        >
          From local favourite to global delight, find the perfect dish for
          every taste
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: "95%",
            alignSelf: "center",
            height: "10%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: "10%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
            }}
            onPress={() => navigation.navigate("Onboarding_3")}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding_2;
