import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import SearchModal from '../../components/SearchBox/SearchModal';

const Stack = createNativeStackNavigator();

export const SearchPage = ()=>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Search Screen</Text>
        </View>
    )
}

function SearchStackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Search-Page' component={SearchModal} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default SearchStackNavigator