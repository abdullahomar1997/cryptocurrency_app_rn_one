import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {

  const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        // Load the custom font asynchronously
        const loadFont = async () => {
          await Font.loadAsync({
            'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
            'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            // Add more custom fonts here if needed
          });
          setFontLoaded(true);
        };
    
        loadFont();
      }, []);

      if (!fontLoaded) {
        // Return a loading screen or null while the font is loading
        return null;
      }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;