import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";import Header from './src/components/Header';
import Home from './src/components/Home';
import TabNavigator from './src/components/TabNavigator';

const Stack = createStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
});