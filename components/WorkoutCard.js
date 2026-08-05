import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../constants/colors";

const WorkoutCard = ({
  image,
  title,
  category,
  duration,
  calories,
  onPress,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite((currentValue) => !currentValue);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Open ${title}`}
    >
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.headingRow}>
          <View style={styles.titleArea}>
            <Text style={styles.category}>{category}</Text>

            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.favouriteButton}
            onPress={toggleFavourite}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={
              isFavourite
                ? `Remove ${title} from favourites`
                : `Add ${title} to favourites`
            }
          >
            <Ionicons
              name={isFavourite ? "heart" : "heart-outline"}
              size={24}
              color={
                isFavourite
                  ? colors.favourite
                  : colors.secondaryText
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.informationRow}>
          <View style={styles.informationItem}>
            <Ionicons
              name="time-outline"
              size={17}
              color={colors.primary}
            />

            <Text style={styles.informationText}>
              {duration} min
            </Text>
          </View>

          <View style={styles.informationItem}>
            <Ionicons
              name="flash-outline"
              size={17}
              color={colors.primary}
            />

            <Text style={styles.informationText}>
              {calories} kcal
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 130,
    flexDirection: "row",
    marginBottom: 16,
    padding: 10,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 14,
    backgroundColor: colors.primaryLight,
  },

  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingLeft: 14,
  },

  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleArea: {
    flex: 1,
    paddingRight: 4,
  },

  category: {
    marginBottom: 4,
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.text,
  },

  favouriteButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  informationRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  informationItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  informationText: {
    marginLeft: 4,
    fontSize: 12,
    color: colors.secondaryText,
  },
});

export default WorkoutCard;