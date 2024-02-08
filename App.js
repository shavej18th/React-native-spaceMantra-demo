import * as React from "react";
import { Text, View, ActivityIndicator, StatusBar } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/Navigation/DrawerTabNavigator/DrawerNavigator";
import InitialStackNavigation from "./src/Navigation/InitialStackNavigation/InitialStackNavigation";
import { client } from "./src/utils/ApolloProvider/index.js";

function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="00ff00" />
      <Text style={{fontFamily:'Poppins-Medium'}}>Loading...</Text>
    </View>
  );
}

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#EAE6DB"
        barStyle="dark-content"
        />
      {userToken == null ? (
        <InitialStackNavigation setUserToken={setUserToken} />
        ) : (
          <DrawerNavigator />
          )}
    </NavigationContainer>
    </ApolloProvider>
  );
}
export default App;