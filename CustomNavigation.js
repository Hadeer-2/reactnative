import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import getstarted from "./screens/getstarted";
import NestedScreen from "./screens/NestedScreen";
import splash from "./screens/splash";
import homeScreen from "./screens/homeScreen";
// import ListFavourit from "./screens/ListFavourit"
const Stack =createStackNavigator()
const FirstScreenNavigation =()=>{
    return(
        <Stack.Navigator>
    <Stack.Screen 
    name="screen1"
    component={splash}
    />
    <Stack.Screen
    name="NestedScreen"
    component={NestedScreen}
    />

        </Stack.Navigator>
      
    )
}
export {FirstScreenNavigation}
const SceondScreenNavigation =()=>{
    return(
        <Stack.Navigator>
    <Stack.Screen 
    name="screen2"
    component={getstarted}
    />
    <Stack.Screen
    name="NestedScreen"
    component={NestedScreen}
    />

        </Stack.Navigator>
      
    )
}
export {SceondScreenNavigation}

const ThirdScreenNavigation =()=>{
    return(
        <Stack.Navigator>
    <Stack.Screen 
    name="screen1"
    component={homeScreen}
    />
    <Stack.Screen
    name="NestedScreen"
    component={NestedScreen}
    />

        </Stack.Navigator>
      
    )
}
export {ThirdScreenNavigation}


// const ListFavourit =()=>{
//     return(
//         <Stack.Navigator>
//     <Stack.Screen 
//     name="list"
//     component={ListFavourit}
//     />
//     <Stack.Screen
//     name="NestedScreen"
//     component={NestedScreen}
//     />

//         </Stack.Navigator>
      
//     )
// }
// export {ListFavourit}