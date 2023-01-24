import ArtistsScreen from './src/Artists';
import AlbumsScreen from './src/Album';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Artists" component={ArtistsScreen} options={{ title: 'Artists' }} />
        <Stack.Screen name="Albums" component={AlbumsScreen} options={{ title: 'Albums' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



