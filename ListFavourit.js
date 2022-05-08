import React from 'react';
import {View,ScrollView,Text,StyleSheet,Image,TouchableOpacity, TextInput,ImageBackground,Button,Pressable} from 'react-native';
export default class App extends React.Component{
  
state ={
  Items:[
    {
        id:0,
        name:'Sprite Can',
        image:require('../images/sprite.png'),
        price:'$1.50',
        text:'325ml, Price',
        
        
        
    },
       {
          id:1,
          name:'Diet Coke',
         image:require('../images/diet_coke.png'),
          price:'$1.99',
          text:'355ml, Price',
        
       },
       {
        id:2,
        name:'Apple & Grape Juice',
        image:require('../images/diet_coke.png'),
        price:'$15.50',
        text:'2L, Price',
        
        
        
    },
    {
      id:3,
      name:'Coca Cola Can',
      image:require('../images/coke.png'),
      price:'$4.99',
      text:'325ml, Price',
      
      
      
  },
  {
    id:4,
    name:'Pepsi Can',
    image:require('../images/pepsi.png'),
    price:'$4.99',
    text:'330ml, Price',
    
    
    
},
  ]
}


render(){
 
  return (
   
  
      
      <View>
       
         
         <View style={{ borderBottomWidth: 1,borderBottomColor: '#E2E2E2',paddingBottom: 3,paddingHorizontal:0}}/>
         <ScrollView style={styles.container}>
         <View >
        
       
          {
               this.state.Items.map((item,index)=>(
                 <View  style={styles.listView}>
                  <View style={{flexDirection: 'row'}}> 

                  <Image source={item.image}  style={styles.image} ></Image>
                  
               
                <View style={{flexDirection:'column', display:'flex' ,flex:1, paddingLeft:25}}>
                  <Text style= {styles.text}> {item.name}</Text>
                  <Text style= {styles.text1}> {item.text}</Text>
                </View>

                  <Text style= {styles.text}> {item.price} </Text>
                  </View>
                  
                 
                 
                
                 </View> 
               )
               
             )
              
             }
            
         </View>

  
       </ScrollView>
       <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.Textbutton}> Add All To Cart </Text>
            </TouchableOpacity>
        </View>
       
  

       </View>
      );
  
}
}


const styles = StyleSheet.create({
   
  
  container: {
    width: '100%',
  
    paddingHorizontal:20,
    
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  
  searchBarBox: {
    paddingHorizontal: 25.0,
    marginBottom: 20.0,
  },
  searchBar: {
    width: '100%',
    paddingVertical: 16.0,
    paddingHorizontal: 15.0,
    //backgroundColor: '#F2F3F2',
    borderRadius: 15.0,
   // display: 'flex',
   // flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBarText: {
    //marginLeft: 10,
    fontFamily: 'gilroyNormal',
    fontSize: 40,
    color: 'black',
  },
    form: {
       
        paddingHorizontal: 20,
       },
       TextInput: {
       
        borderBottomWidth: 2,
        borderBottomColor: '#E2E2E2',
        paddingBottom: 5,
       
      },
      placeholder:{
        fontFamily: 'Gilroy',
        fontSize:20,
        fontWeight: '900',
      },
  
       headerTitle: {
        fontSize: 25,
    
        fontFamily: '$gilroyNormal600',
        marginBottom: 40,
        color: '#030303',
        paddingTop: 120,
      },
      text:{
            alignItems:'center',
            color:'#000000',
            fontWeight:'700',
            fontSize:16,
            letterSpacing: 0.1,
            lineHeight:30 ,
      },
      text1:{
        color:'#7C7C7C',
        fontSize:14,
       // fontWeight:'500',
        lineHeight: 18,

      },
  Text2:{
    color:'#828282',
    fontFamily:'Gilroy',
    fontSize:17,
    fontWeight:'600',
    paddingBottom:10


},
Text3:{
  color:'green',
  fontFamily:'Gilroy',
  fontSize:17,
  fontWeight:'500',
  position: 'absolute',
 
  right: 290,
  top: 420,


},
image:{
  //marginTop:10
  //width:'8%',
  //height: 60,
  width: 29,
  height: 53,
},

// button:{
//   position: 'absolute',
 
//   left: 322,
//   top: 400,

// },
button: {
  backgroundColor: '#53B175',
  borderRadius: 19,
  width: 350,
  height: 67,
  alignItems: 'center',
  justifyContent: 'center',

  marginTop: 10,
},

Textbutton: {
  color: '#FCFCFC',
  fontFamily: 'Gilroy',
  fontWeight: '600',
  fontSize: 18,
  textAlign: 'center',
},
listView : {
  //flexDirection:'row',
 // alignItems:'center',
  paddingTop:25,
 paddingBottom:25,
  borderBottomWidth:1,
  borderBottomColor:'#ccc',
  flex:1,
 //backgroundColor:'#ffffff',
 // height:200,
},




   
  

  });