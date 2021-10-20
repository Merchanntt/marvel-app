import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Dashboard from '../pages/dashboard';
import HeroDetailsPage from '../pages/details';

const App = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen name="dashboard" component={Dashboard}/>
    <App.Screen name="heroDetailsPage" component={HeroDetailsPage}/>
  </App.Navigator>
)

export default AppRoutes;