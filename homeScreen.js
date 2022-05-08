import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Fresh Fruits & Vegatables', code: 'rgba(83, 177, 117, 0.1)' , image:require('../images/2.png')},
    { name: 'Cooking Oil & Ghee', code: 'rgba(248, 164, 76, 0.1)'  , image:require('../images/6.png')},
    { name: 'Meat & Fish', code: 'rgba(247, 165, 147, 0.25)' ,image:require('../images/7.png')},
    { name: 'Bakery & Snacks', code: 'rgba(211, 176, 224, 0.25)' ,image:require('../images/5.png')},
    { name: 'Dairy & Eggs', code: 'rgba(253, 229, 152, 0.25)' ,image:require('../images/4.png')},
    { name: 'Beverages', code: 'rgba(183, 223, 245, 0.25)' ,image:require('../images/3.png')},
    { name: 'Fresh Fruits & Vegatables', code: 'rgba(131, 106, 246, 0.15)' ,image:require('../images/7.png')},
    { name: 'Fresh Fruits & Vegatables', code: 'rgba(215, 59, 119, 0.15)',image:require('../images/2.png') },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
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
  );
}

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