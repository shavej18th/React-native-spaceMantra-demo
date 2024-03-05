import React from 'react'
import {View,Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryScreen from '../../components/Screens/CategoryScreen/CategoryScreen';
import ProductFullDetail from '../../components/Screens/ProductFullDetail/ProductFullDetail'
const Stack = createNativeStackNavigator();

const CategoryStackNavigator = ()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='CategoryStack' component={CategoryScreen}/>
            <Stack.Screen name='productfulldetail' component={ProductFullDetail}/>
        </Stack.Navigator>
    )
}
export default CategoryStackNavigator;