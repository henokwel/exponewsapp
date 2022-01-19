import React from "react";
import { Box, Container, Flex, Heading, Text, View } from "native-base";
// import { StatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const Tab = createMaterialTopTabNavigator();

const Header: React.FC<{}> = () => {
  return (
    <Container>
      <StatusBar hidden={true} />

      <View style={{ paddingTop: StatusBar.currentHeight }} />

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="96"
        
      >
        <Heading color="black" fontWeight="bold" letterSpacing="md">
          {" "}
          Reading
        </Heading>

        <Flex direction="row">
          <Text>Search</Text>
          <Text>Avatar</Text>
        </Flex>
      </Box>

      {/* <Box flexDirection="row">
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </Box> */}
    </Container>
  );
};


function HomeScreen() {
    
    return(
        <Box flex={1} bg="#000" alignItems="center" justifyContent="center">
          Home
        </Box>
    )
}

function SettingsScreen() {
    
    return(
        <Text>SettingsScreen</Text>
    )
}


export default Header;
