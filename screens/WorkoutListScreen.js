import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import WorkoutCard from "../components/WorkoutCard";
import workouts from "../data/workouts";
import colors from "../constants/colors";

const WorkoutListScreen = ({ navigation }) => {
  const openWorkoutDetails = (workout) => {
    navigation.navigate("WorkoutDetails", {
      workout: workout,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />

      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Ready to move?</Text>
          <Text style={styles.title}>Workout Library</Text>

          <Text style={styles.subtitle}>
            Browse the available sessions and select one to view
            its details.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>All Workouts</Text>
          <Text style={styles.workoutCount}>
            {workouts.length} workouts
          </Text>
        </View>

        <View style={styles.workoutList}>
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              image={workout.image}
              title={workout.title}
              category={workout.category}
              duration={workout.duration}
              calories={workout.calories}
              onPress={() => openWorkoutDetails(workout)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 28,
  },

  greeting: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.burgundy,
  },

  subtitle: {
    maxWidth: 340,
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: colors.secondaryText,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: colors.text,
  },

  workoutCount: {
    fontSize: 12,
    color: colors.secondaryText,
  },

  workoutList: {
    width: "100%",
  },
});

export default WorkoutListScreen;