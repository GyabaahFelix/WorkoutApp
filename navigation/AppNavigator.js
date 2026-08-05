import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutListScreen from "../screens/WorkoutListScreen";
import WorkoutDetailsScreen from "../screens/WorkoutDetailsScreen";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WorkoutList"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.burgundy,
          headerTitleStyle: {
            fontWeight: "700",
          },
          headerShadowVisible: false,
          animation: "slide_from_right",
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="WorkoutList"
          component={WorkoutListScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="WorkoutDetails"
          component={WorkoutDetailsScreen}
          options={({ route }) => ({
            title:
              route.params?.workout?.title ||
              "Workout Details",
            headerBackTitle: "Back",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;