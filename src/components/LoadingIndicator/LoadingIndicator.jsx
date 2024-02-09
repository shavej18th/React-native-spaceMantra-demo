import React from 'react'
import { ActivityIndicator,View, Text} from 'react-native';

function LoadingIndicator() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="00ff00" />
        <Text style={{fontFamily:'Poppins-Medium'}}>Loading...</Text>
      </View>
    );
  }

export default LoadingIndicator;