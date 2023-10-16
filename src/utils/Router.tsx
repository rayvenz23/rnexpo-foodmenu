import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Products,
  EditProduct,
  Details,
} from '../screens';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={stackNavigatorNavbar} >
        <Stack.Group >
          <Stack.Screen name="Products" component={Products} options={{ title: 'Products', }} />
          <Stack.Screen name="EditProduct" component={EditProduct} options={{ title: '', }} />
          <Stack.Screen name="Details" component={Details} options={{ title: 'Product Details', }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const stackNavigatorNavbar = {
  headerStyle: {
    backgroundColor: colors.primary,
    tintColor: colors.white,
  },
  headerTitleStyle: {
    fontSize: 30,
    color: colors.white,
  },
  headerTintColor: colors.white,
};

export default Router;