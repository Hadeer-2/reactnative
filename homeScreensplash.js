// import React, { useState, useRef } from 'react';
// import { StyleSheet, View, Text,ImageBackground } from 'react-native';
// import { FlatGrid } from 'react-native-super-grid';


// export default function Example() {
    

//   const [items, setItems] = React.useState([
//     { name: 'TURQUOISE',
    
//      code: '#1abc9c' },
//     { name: '',
//     image1: require('../images/1.png'),
//      code: '#2ecc71' },
//     { name: '',
//     image1: require('../images/2.png'),
//      code: '#3498db' },
//     { name: '', 
//     image1: require('../images/3.png'),
//     code: '#9b59b6' },
//     { name: '', 
//     image1: require('../images/4.png'),
    
//     code: '#34495e' },
//     { name: 'GREEN SEA',
//     image1: require('../images/5.png'), 
//      code: '#16a085' },
//     { name: 'NEPHRITIS',
//     image1: require('../images/6.png'),
    
//     code: '#27ae60' },
//     { name: 'BELIZE HOLE', code: '#2980b9' },
//     { name: 'WISTERIA', code: '#8e44ad' },
//     { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
//     { name: 'SUN FLOWER', code: '#f1c40f' },
//     { name: 'CARROT', code: '#e67e22' },
//     { name: 'ALIZARIN', code: '#e74c3c' },
//     { name: 'CLOUDS', code: '#ecf0f1' },
//     { name: 'CONCRETE', code: '#95a5a6' },
//     { name: 'ORANGE', code: '#f39c12' },
//     { name: 'PUMPKIN', code: '#d35400' },
//     { name: 'POMEGRANATE', code: '#c0392b' },
//     { name: 'SILVER', code: '#bdc3c7' },
//     { name: 'ASBESTOS', code: '#7f8c8d' },
//   ]);

//   return (
   
//     <FlatGrid
    
//       itemDimension={130}
//     //   data={items}
//       data={items}
//       style={styles.gridView}
//       // staticDimension={300}
//       // fixed
//       spacing={10}
//       renderItem={({ item , image1 }) =>
//       (
            
//         <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
//            <ImageBackground>{item.image1}</ImageBackground>
//           <Text style={styles.itemName}>{item.name}</Text>
//           <Text style={styles.itemCode}>{item.code}</Text>
//         </View>
//       )}
     
//     />
    
//   );
// }

// const styles = StyleSheet.create({
//   gridView: {
//     marginTop: 10,
//     flex: 1,
//   },
//   itemContainer: {
//     justifyContent: 'flex-end',
//     borderRadius: 5,
//     padding: 10,
//     height: 150,
//   },
//   itemName: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   itemCode: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#fff',
//   },
// });

import React from 'react';
import { StyleSheet, View, Text , Image} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
// import Header from './components/Header';
//  import SearchBar from "react-native-dynamic-search-bar";
 export const Explore=()=> {
  
  const [items, setItems] = React.useState([
    { name: 'Fresh Fruits & Vegatables', code: 'rgba(83, 177, 117, 0.1)' , image:require('../images/1.png')},
    { name: 'Cooking Oil                & Ghee', code: 'rgba(248, 164, 76, 0.1)'  , image:require('../images/1.png')},
    { name: 'Meat & Fish', code: 'rgba(247, 165, 147, 0.25)' ,image:require('../images/1.png')},
    { name: 'Bakery & Snacks', code: 'rgba(211, 176, 224, 0.25)' ,image:require('../images/1.png')},
    { name: 'Dairy & Eggs', code: 'rgba(253, 229, 152, 0.25)' ,image:require('../images/1.png')},
    { name: 'Beverages', code: 'rgba(183, 223, 245, 0.25)' ,image:require('../images/1.png')},
    { name: 'Fresh Fruits & Vegatables', code: 'rgba(131, 106, 246, 0.15)' ,image:require('../images/1.png')},
    { name: 'Fresh Fruits & Vegatables', code: 'rgba(215, 59, 119, 0.15)',image:require('../images/1.png') },
   
    
  ]);

  return (
    <View style={styles.container}>
         
                <Header name='Find Products'/>
                <SearchBar style={{ backgroundColor:"#F2F3F2", borderRadius: 15, height: 55}}
      fontColor="#c6c6c6"
      iconColor="#c6c6c6"
      shadowColor="#282828"
      
      //cancelIconColor="#c6c6c6"
      backgroundColor="#F2F3F2"
      placeholder="Search store"
     // onChangeText={(text) => this.filterList(text)}
      //onSearchPress={() => console.log("Search Icon is pressed")}
      //onClearPress={() => this.filterList("")}
      //onPress={() => alert("onPress")}
    />
  
    <FlatGrid
      //itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
    
      renderItem={({ item }) => (
        
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          
           <Image source={item.image} style={styles.itemCode}></Image>
          <Text style={styles.itemName}>{item.name}</Text>
         
        </View>
       
      )}
    />
     </View>  
  );
}
// export default Explore;
const styles = StyleSheet.create({
  gridView: {
    //marginTop: 10,
    flex: 1,
    paddingHorizontal:5,
  },
  container: {
        width: '100%',
        //paddingTop: 8.1,
       // paddingBottom: 30.0,
       // paddingHorizontal:20,
        flex:1,
      },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 18,
    padding: 10,
    height: 150,
    width: 170,
    height: 180,
    
     alignItems:'center',
  
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    justifyContent:'center',
    textAlign:'center',
    paddingTop:30,
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    //color: '#fff',
    width: 100,
    height: 70,
    justifyContent:'center',
    alignItems:'center',
  },
});

