import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import splitLayoutProps from 'react-native/Libraries/StyleSheet/splitLayoutProps'


export default function CustomButton(props){
    return(
        <TouchableOpacity onPress={()=>props.click()}>
            <View style={styles.button}>
            <Text style={styles.text}>{props.name}</Text>
            </View>

        </TouchableOpacity>
    )
}