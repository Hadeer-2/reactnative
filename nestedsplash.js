import React from 'react';
import { View, Text, StyleSheet, Image,Button ,TextInput,ImageBackground ,TouchableOpacity } from 'react-native';



const NestedScreen = ({route}) => {
    return (
        <ImageBackground style={styles.backgroundimag}source={require('../images/photo.png')}>
             <View style={styles.logo}>
            <Image source={require('../images/carrot.png')} style={styles.image}></Image>

        <Text style={styles.text}>Welcom</Text>
        <Text style={styles.text}>To Our Store</Text>
        <View>
        <Text style={styles.smallT}>Get your groceries in as fast as an hour</Text>
        </View>
        <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate("NestedScreen" , {msg:"came from screen1"})}> 
          <Text>get started</Text>
            
            </TouchableOpacity>
            
        </View>
            </ImageBackground>
        
    )
}
export default NestedScreen
const styles = StyleSheet.create({
    backgroundimag:{
        flex:1
      },
     
      logo: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        paddingTop:150
        
      
       
    },
    smallT:{
      color :"#F0FFF0"
    },
    
    input:{
        padding:20,
        backgroundColor:"pink",
        marginTop:20
    },
    button:{
        backgroundColor:"#53B175",
        padding:15,
        marginTop:40,
        alignItems:"center",
        width:250,
        borderRadius:10
        
    },
    text:{
      textAlign:'center',
      color:'white',
      flexDirection: 'column',
      fontSize: 50,
      fontWeight: "bold",
    }
})
