import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'
import Home from '../Home';
import Observer from '../Observer';
import Synoptic from '../Synoptic';
import Common from '../Common';


const Tab = createBottomTabNavigator();


const AppWrapper = () => {




    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Главная') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Метеонаблюдатель') {
                        iconName = focused ? 'eye-sharp' : 'eye-outline';
                    } else if (route.name === 'Синоптик') {
                        iconName = focused ? 'thunderstorm' : 'thunderstorm-outline';
                    } else if (route.name === 'Общее') {
                        iconName = focused ? 'earth' : 'earth-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#228B22',
                inactiveTintColor: '#0000FF',
            }}
        >
            <Tab.Screen name="Главная" component={Home} />
            <Tab.Screen name="Метеонаблюдатель" component={Observer} />
            <Tab.Screen name="Синоптик" component={Synoptic} />
            <Tab.Screen name="Общее" component={Common} />
        </Tab.Navigator>
    );
}

export default AppWrapper;
