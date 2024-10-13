import {View,Text} from 'react-native'

export const Notification=(toast)=>{
return (
        <View style={{padding: 20, backgroundColor: 'green',width:'80%',borderRadius:5,paddingHorizontal:30,marginBottom:10}}>
          <Text style={{textAlign:'center',fontSize:20}}>{toast.message}</Text>
        </View>
)

}


