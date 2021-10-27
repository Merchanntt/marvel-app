import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import './ReactotronConfig.js'

import { View } from 'react-native';

import AppRoutes from './src/routes';
import {store, persistor} from './src/store/redux';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar style='light'/>
          <View style={{flex: 1, backgroundColor: '#312e38'}}>
            <AppRoutes />
          </View>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}