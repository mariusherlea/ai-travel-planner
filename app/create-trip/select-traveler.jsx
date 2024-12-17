import { View, Text, FlatList } from "react-native";
import React from "react";
import { SelectTravelerList } from "../../constants/Options";

import OptionCard from "../../components/CreateTrip/OptionCard";

export default function SelectTraveler() {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        Who's traveling
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit", fontSize: 25, marginLeft: 20 }}>
          Choose your traveler(s)
        </Text>
        <FlatList
          data={SelectTravelerList}
          renderItem={({ item, index }) => (
            <View style={{ margin: 20 }}>
              <OptionCard option={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
}
