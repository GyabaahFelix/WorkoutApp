import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../constants/colors";

const WorkoutDetailsScreen = ({ route }) => {
  const { workout } = route.params;

  const [isCompleted, setIsCompleted] = useState(false);

  const toggleWorkoutStatus = () => {
    setIsCompleted((currentValue) => !currentValue);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={{ uri: workout.image }}
        style={styles.heroImage}
        resizeMode="cover"
      />

      <View style={styles.categoryBadge}>
        <Text style={styles.categoryText}>
          {workout.category}
        </Text>
      </View>

      <Text style={styles.title}>{workout.title}</Text>

      <Text style={styles.description}>
        {workout.description}
      </Text>

      <View style={styles.informationContainer}>
        <View style={styles.informationCard}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="time-outline"
              size={24}
              color={colors.primary}
            />
          </View>

          <Text style={styles.informationLabel}>Duration</Text>

          <Text style={styles.informationValue}>
            {workout.duration} min
          </Text>
        </View>

        <View style={styles.informationCard}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="flash-outline"
              size={24}
              color={colors.primary}
            />
          </View>

          <Text style={styles.informationLabel}>
            Energy
          </Text>

          <Text style={styles.informationValue}>
            {workout.calories} kcal
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.actionButton,
          isCompleted && styles.completedButton,
        ]}
        onPress={toggleWorkoutStatus}
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityLabel={
          isCompleted
            ? "Mark workout as not completed"
            : "Start workout"
        }
      >
        <Ionicons
          name={
            isCompleted
              ? "checkmark-circle-outline"
              : "play-circle-outline"
          }
          size={24}
          color={colors.card}
        />

        <Text style={styles.actionButtonText}>
          {isCompleted ? "Completed" : "Start Workout"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  heroImage: {
    width: "100%",
    height: 260,
    backgroundColor: colors.primaryLight,
    borderRadius: 24,
  },

  categoryBadge: {
    alignSelf: "flex-start",
    marginTop: 22,
    paddingHorizontal: 14,
    paddingVertical: 7,
    backgroundColor: colors.primaryLight,
    borderRadius: 20,
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primary,
  },

  title: {
    marginTop: 14,
    fontSize: 29,
    fontWeight: "700",
    color: colors.burgundy,
  },

  description: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 23,
    color: colors.secondaryText,
  },

  informationContainer: {
    flexDirection: "row",
    gap: 14,
    marginTop: 26,
  },

  informationCard: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
  },

  iconContainer: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    backgroundColor: colors.primaryLight,
    borderRadius: 21,
  },

  informationLabel: {
    fontSize: 12,
    color: colors.secondaryText,
  },

  informationValue: {
    marginTop: 4,
    fontSize: 17,
    fontWeight: "700",
    color: colors.text,
  },

  actionButton: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 30,
    backgroundColor: colors.primary,
    borderRadius: 18,
  },

  completedButton: {
    backgroundColor: colors.burgundy,
  },

  actionButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.card,
  },
});

export default WorkoutDetailsScreen;