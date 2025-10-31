import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Dojo Elite' }} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} options={{ title: 'Horários' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Pré-cadastro' }} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contato' }} />
    </Stack.Navigator>
  );
}