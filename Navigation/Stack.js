import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../Screens/Intro';
import { NavigationContainer } from '@react-navigation/native';
import { Score } from '../Screens/Score';






const Stack = createNativeStackNavigator();

export function StackNav() {
    return (
      <NavigationContainer>
  
      <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}} >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Score" component={Score} />  
      </Stack.Navigator>
      </NavigationContainer>
    );
  }