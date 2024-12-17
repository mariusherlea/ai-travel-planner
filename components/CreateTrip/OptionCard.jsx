import { View, Text } from "react-native";
import React from "react";

export default function OptionCard({ option }) {
  return (
    <View
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          {option.title}
        </Text>
        <Text style={{ fontSize: 15, fontFamily: "outfit" }}>
          {option.desc}
        </Text>
      </View>
      <Text style={{ fontSize: 30 }}>{option.icon}</Text>
    </View>
  );
}
