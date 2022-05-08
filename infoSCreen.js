import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image, TextInput} from 'react-native';

 const infoSCreen
 =({navigation})=>{

        return (
            <View style={styles.containersplash}>
             <Text>hi i am splash</Text>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("NestedScreen" ,{msg:"came from screen1"})}>
         
                <Text style={styles.mytext} >WELCOM</Text>
            </TouchableOpacity>
            </View>
        );
    
}
export default infoSCreen


 
const styles = StyleSheet.create({
    containersplash : {
     
     
        flex:1,
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

});
