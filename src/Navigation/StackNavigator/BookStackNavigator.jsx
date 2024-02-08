import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const Book = ()=>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Book Screen!</Text>
        </View>
    )
}
const BookStackNavigator = ()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='BookStack' component={Book}/>
        </Stack.Navigator>
    )
}
export default BookStackNavigator;