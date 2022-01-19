import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider ,Box} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#000" alignItems="center" justifyContent="center">
        Hello world</Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
