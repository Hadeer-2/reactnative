import React from 'react';
import {View,Text,StyleSheet,Image, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirstScreenNavigation} from './CustomNavigation'
import {SceondScreenNavigation } from './CustomNavigation'
import { ThirdScreenNavigation} from './CustomNavigation'
//  import {ListFavourit}from './CustomNavigation'


const Tab = createBottomTabNavigator()
export default class App extends React.Component{
    render(){
        return (
           <NavigationContainer
         
           >
             <Tab.Navigator
            screenOptions={{
               labelStyle:{fontSize:10},
               activeTintColor:'green',
               headerShown:false,

             }}
             >
               <Tab.Screen
               
                 name = "splash"
                 component={FirstScreenNavigation}
               />
                <Tab.Screen
                 name="get started"
                 component={SceondScreenNavigation}
                 />
               <Tab.Screen
                 name="home Screen"
                 component={ThirdScreenNavigation}
                 /> 
                  {/* <Tab.Screen
                 name="list"
                 component={ListFavourit}
                 />   */}
                 
                 
              
               
             </Tab.Navigator>
           </NavigationContainer>
        );
    }
}

 
const styles = StyleSheet.create({
    container : {
        flex:1,
    }
});
