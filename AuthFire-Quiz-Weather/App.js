import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import LanguagesScreen from './screens/LanguagesScreen';
import PageConnection from './screens/PageConnection';
import PageAcceuil from './screens/PageAcceuil';
import WeatherScreen from './screens/WeatherScreen';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false }} name="Languages" component={LanguagesScreen} />
      <Stack.Screen options={{headerShown: false }} name="Connection" component={PageConnection} />
      <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false }} name="Home" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Weather" component={WeatherScreen} />
      <Stack.Screen options={{headerShown: false }} name="Acceuil" component={PageAcceuil} />
      </Stack.Navigator>
    </NavigationContainer>
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
