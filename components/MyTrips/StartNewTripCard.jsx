import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export default function StartNewTripCard() {
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-outline" size={30} color="black" />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        No trips planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          color: "#888",
        }}
      >
        Look like its time to plan a new travel experience ! Let's get started !
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 17 }}>Start a new trip</Text>
      </TouchableOpacity>
    </View>
  );
}
