import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Preview from './Preview';
import Home from './Home';
import ShowList from './ShowList';
import Counter from './Counter';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preview" screenOptions={{headerShown: false}} >
      {/* <Stack.Navigator initialRouteName="ShowList" screenOptions={{headerShown: false}} > */}
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ShowList" component={ShowList} />
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
