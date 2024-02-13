import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryScreen from '../../components/Screens/CategoryScreen/CategoryScreen';

const Stack = createNativeStackNavigator();

const CategoryStackNavigator = ()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='CategoryStack' component={CategoryScreen}/>
        </Stack.Navigator>
    )
}
export default CategoryStackNavigator;