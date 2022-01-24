import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";
// import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function App() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NativeBaseProvider>
      <Header />

      {/* <Box  bg="#000" alignItems="center" justifyContent="center">
          Hello world
        </Box> */}
    </NativeBaseProvider>
  );
}
