
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'
import Map from '../Map'
import MetarTaf from '../MetarTaf'
import HelloView from '../HelloView'
import MeteoChat from '../MeteoChat';
import NotExist from '../NotExist'


export default function Home() {
    const Tab = createBottomTabNavigator();

    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Главная страница') {
                            iconName = focused
                                ? 'star'
                                : 'star-outline';
                        } else if (route.name === 'METAR/TAF') {
                            iconName = focused ? 'ios-airplane-sharp' : 'ios-airplane-outline';
                        } else if (route.name === 'Карта') {
                            iconName = focused ? 'md-earth' : 'md-earth-outline';
                        } else if (route.name === 'АД') {
                            iconName = focused ? 'ios-today-sharp' : 'ios-today-outline';
                        } else if (route.name === 'Метеочат') {
                            iconName = focused ? 'md-bonfire-sharp' : 'md-bonfire-outline';
                        }
                        return <Ionic name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#8484e3',
                    tabBarInactiveTintColor: 'gray',
                })}
            >

                <Tab.Screen name="Главная страница" component={HelloView} />
                <Tab.Screen name="METAR/TAF" component={MetarTaf} />
                <Tab.Screen name="Карта" component={Map} />
                <Tab.Screen name="АД" component={NotExist} />
                <Tab.Screen name="Метеочат" component={MeteoChat} />


            </Tab.Navigator>
        </>
    );
}


