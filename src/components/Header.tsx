import React from "react";
import { Box, Container, Heading, Text } from "native-base";
// import { StatusBar } from "expo-status-bar";
import { View, StatusBar } from "react-native";

const Header: React.FC<{}> = () => {
  return (
    <Container>
      <StatusBar hidden={true} />

      <View style={{ paddingTop: StatusBar.currentHeight }} />

      <Box>
        <Heading color="black" fontWeight="bold" letterSpacing="md">
          {" "}
          Reading
        </Heading>

        <Box>
            <Text>Search</Text>
            <Text>Avatar</Text>
        </Box>
      </Box>

      <Box>
        <Text>Tabs</Text>
      </Box>
    </Container>
  );
};

export default Header;
