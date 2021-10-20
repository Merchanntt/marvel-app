import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AppRoutes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      <View style={{flex: 1, backgroundColor: '#312e38'}}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
}