import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <Box flex={1} bg="#000" alignItems="center" justifyContent="center">
        Hello world
      </Box>
    </NativeBaseProvider>
  );
}
 