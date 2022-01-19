import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";
// import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function App() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Header />

        <Box flexDirection="row">
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </Box>
        {/* <Box  bg="#000" alignItems="center" justifyContent="center">
          Hello world
        </Box> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <Box bg="#000" alignItems="center" justifyContent="center">
     <Text> Home
       </Text> 
    </Box>
  );
}

function SettingsScreen() {
  return <Text>SettingsScreen</Text>;
}
