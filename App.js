import 'react-native-gesture-handler';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  // return <DrawerNavigator>
  //   <Drawer.Screen name='Categories' component={CategoriesScreen}/>
  //   <Drawer.Screen name='Favorites' component={FavoritesScreen}/>
  // </DrawerNavigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} 
          options={{
            title: 'All Categories',
            
          }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} 
          // options={({route, navigation}) => {
          //   const catId = route.params.categoryId;
          //   return {
          //       title: catId,
          //   };
          // }}
          />
          <Stack.Screen 
          name='MealDetail' 
          component={MealDetailScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
