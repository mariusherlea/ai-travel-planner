import { View, Text } from "react-native";
import React from "react";

export default function BudgetCard({ option, selectBudget }) {
  return (
    <View
      style={[
        {
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#faf7ed",
        },
        selectBudget?.id == option?.id && { borderWidth: 2 },
      ]}
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
