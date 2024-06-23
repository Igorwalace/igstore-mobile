//pages
import Home from './src/app/pages/home'

import Product_Single from './src/app/pages/Product_Single';

//react navi
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Home"
          component={Home} />

        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Product Single"
          component={Product_Single} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}