import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="mytrip"
        options={{
          title: "My Trip",
          tabBarIcon: () => (
            <Ionicons name="location-outline" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: () => (
            <Ionicons name="globe-outline" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <Ionicons name="people-outline" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
