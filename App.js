import * as React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/Navigation/DrawerTabNavigator/DrawerNavigator";
import InitialStackNavigation from "./src/Navigation/InitialStackNavigation/InitialStackNavigation";
import { client } from "./src/utils/ApolloProvider/index.js";
import useFonts from "./src/hooks/useFonts.js";
import LoadingIndicator from "./src/components/LoadingIndicator/LoadingIndicator.jsx";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [fontLoaded,setFontLoaded] = React.useState(false);
  // const colorScheme = useColorScheme();

  React.useEffect(() => {
      async function fetchFonts() {
        await useFonts();
        setFontLoaded(true);
      }
      fetchFonts();
    }, []);

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

  if (isLoading && !fontLoaded ) {
    // We haven't finished checking for the token yet
    return <LoadingIndicator />;
  }

  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#EAE6DB"
        barStyle='default'
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