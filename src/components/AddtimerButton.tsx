import react from 'react';
import {  TouchableOpacity ,Text} from "react-native"
import {useToast} from 'react-native-toast-notifications';


export const AddtimerButton=({addtoArray})=>{
    const toast=useToast()
    return (
        <TouchableOpacity onPress={()=>addtoArray(toast)}  style={{backgroundColor:"blue",borderRadius:10,justifyContent:'center',alignSelf:'center',padding:13,marginTop:10,marginBottom:30}} >
        <Text style={{textAlign:'center',fontSize:17,fontWeight:'600',color:"white"}} >
        create more timer
        </Text>
      </TouchableOpacity>
    )
}