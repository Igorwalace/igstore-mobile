//pages
import Product_Single from './src/app/pages/Product_Single';
import Home from './src/app/pages/home'
import Menu from './src/app/pages/Menu'

//react navi
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Stack.Screen
        name="Product Single"
        options={{
          headerShown: false,
          animation: 'ios',
          gestureEnabled: true
        }}
        component={Product_Single} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={Menu} initialRouteName='Initial' >
        <Drawer.Screen name="Initial" options={{ headerShown: false }} component={StackHome} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  )
}