import ArtistsScreen from './Screens/Artists';
import AlbumsScreen from './Screens/Album';
import ConcertsScreen from './Screens/Concerts';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Artists" component={ArtistsScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
        <Stack.Screen name="Concerts" component={ConcertsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




