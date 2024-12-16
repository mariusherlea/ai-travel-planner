import { View, Text } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  return (
    <View
      style={{
        padding: 10,
        paddingTop: 40,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> </Text>

        <Ionicons name="add-circle-outline" size={50} color="black" />
      </View>
      {userTrips?.length == 0 ? <StartNewTripCard /> : null}
    </View>
  );
}
