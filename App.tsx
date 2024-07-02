//pages
import Product_Single from './src/app/pages/Product_Single';
import Home from './src/app/pages/home'
import Menu from './src/app/pages/Menu'
import Mouses from './src/app/pages/Mouses'
import Keyborad from './src/app/pages/Keyboard'
import Fones from './src/app/pages/Fones'
import Catalogo from './src/app/pages/Catalogo';
import Carrinho from './src/app/pages/Carrinho';

//react navi
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false, animation: 'ios' }} component={Home} />
      <Stack.Screen name="Mouses" options={{ headerShown: false, animation: 'ios' }} component={Mouses} />
      <Stack.Screen name="Keyboard" options={{ headerShown: false, animation: 'ios' }} component={Keyborad} />
      <Stack.Screen name="Fones" options={{ headerShown: false, animation: 'ios' }} component={Fones} />
      <Stack.Screen name="Catalogo" options={{ headerShown: false, animation: 'ios' }} component={Catalogo} />
      <Stack.Screen name="Carrinho" options={{ headerShown: false, animation: 'ios' }} component={Carrinho} />
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