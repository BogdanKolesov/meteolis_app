import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_100Thin } from '@expo-google-fonts/roboto';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { navigationStackData } from './data/navigationStackData';
import { DrawerMenuData } from './data/drawerMenuData';
import CustomDrawer from './components/organismes/CustomDrawer';


const Drawer = createDrawerNavigator();
export default function App() {


  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_100Thin
  });

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <NavigationContainer>

      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
      >

        {DrawerMenuData.map((data, index) => (
          <Drawer.Screen
            key={index}
            name={data.name}
            component={data.component}
            options={data.options}
          />
        ))}

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
