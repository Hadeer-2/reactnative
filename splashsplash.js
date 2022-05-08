import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image, TextInput,ImageBackground} from 'react-native';



 const Splash=({navigation})=>{

        return (
            <View style={styles.containersplash}>
            <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate("NestedScreen" , {msg:"came from screen1"})}> 
            
            <Image  style={{
            resizeMode: "contain",
            height: 100,
            width: 200,
            marginLeft:70,
           marginTop:280
          }}  source={require("../images/group.png")}></Image>
            
            </TouchableOpacity>
            </View>
        );
    
}
export default Splash


 
const styles = StyleSheet.create({
    containersplash : {
     backgroundColor:"#53B175",
flex:1
    },
    mytext: {
        color: 'black',
        fontSize: 25,
        textAlign:'center'
    },
    button:{
        color:"green",
        paddingHorizontal:10,
        paddingVertical:6

    },
    logo:{
     
        


    }

});
