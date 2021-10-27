import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import Dashboard from '../pages/dashboard';
import HeroDetailsPage from '../pages/details';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#312e38'}}}>
    <App.Screen name="dashboard" component={Dashboard}/>
    <App.Screen name="heroDetailsPage" component={HeroDetailsPage}/>
  </App.Navigator>
)

export default AppRoutes;