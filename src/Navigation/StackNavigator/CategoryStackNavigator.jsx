import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const Contact = ()=>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Contact Screen!</Text>
        </View>
    )
}
const CategoryStackNavigator = ()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ContactStack' component={Contact}/>
        </Stack.Navigator>
    )
}
export default CategoryStackNavigator;