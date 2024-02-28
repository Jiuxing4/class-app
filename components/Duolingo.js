import {Text, View, Image, Button, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
const Duolingo =() =>{
  const navigation=useNavigation()
    return( 
        <View
        style={{
          backgroundColor: "black",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={require("../assets/images.png")} style={{}}/>
        <Text
          style={{
            color: "white",
            width: 255,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          The free, fun and effective way to learn a language
        </Text>
  
        <View style={{ marginTop: 120 }}>
          {/* Button for get started */}
          <TouchableOpacity
            style={{
              borderRadius: 16,
              backgroundColor: "#2BD800",
              padding: 24,
              width: 312,
              margin: 20,
            }} 
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color: "#191920",
                textAlign: "center",
              }} onPress={()=>navigation.navigate('Location')}
            >
              GET STARTED
            </Text>
          </TouchableOpacity>
          {/* button for i already have an account */}
          <TouchableOpacity
            style={{
              borderRadius: 16,
              padding: 24,
              width: 312,
              borderColor: "#525D70",
              borderWidth: 2,
              backgroundColor: "#191920",
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color: "#2BD800",
                textAlign: "center",
              }}
            >
              I ALREADY HAVE AN ACCOUNT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default Duolingo