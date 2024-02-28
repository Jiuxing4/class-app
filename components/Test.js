import { View } from "react-native"
import { useNavigation } from '@react-navigation/native';
const Test=( )=>{
    
    const navigation=useNavigation()
    return(
    <View style={{

        backgroundColor:'blue',
        width:'30%',
        height:150,
        bordeRaduis: 20,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'black',
        margin:40

    }}
    >
<view style={{width:150,height:250,background:'red'

}}>
</view>
<view style={{width:150,height:250,background:'purple',

}}>
</view>

    </View>
    )
}
export default Test 