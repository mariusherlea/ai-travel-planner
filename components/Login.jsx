import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function Login() {
  return (
    <View>
      <Image
        source={require("../assets/images/Daco_416657.png")}
        style={{ width: "100%", height: 400 }}
      />
      <View
        style={{ alignItems: "center", marginBottom: 20, borderRadius: 10 }}
      >
        <Text style={{ fontSize: 28, fontFamily: "outfit-bold" }}>
          Ai Travel Planner
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit-regular",
            textAlign: "center",
            color: "#666666",
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights
        </Text>
      </View>
    </View>
  );
}
