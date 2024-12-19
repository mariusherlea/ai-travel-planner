import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { SelectTravelerList } from "../../constants/Options";
import { CreateTripContext } from "../../context/CreateTripContext";

import OptionCard from "../../components/CreateTrip/OptionCard";
import { Link } from "expo-router";

export default function SelectTraveler() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [selectTraveler, setSelectTraveler] = useState();

  useEffect(() => {
    setTripData((prevData) => ({ ...prevData, traveler: selectTraveler }));
  }, [selectTraveler]);
  useEffect(() => {
    console.log("Updated tripData:", tripData);
  }, [tripData]);
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: "100%",
        marginLeft: 10,
        marginRight: 10,
      }}
    >
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
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectTraveler(item)}
              style={{ margin: 20 }}
            >
              <OptionCard option={item} selectTraveler={selectTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity style={{ padding: 15, backgroundColor: "#000" }}>
        <Link href={"create-trip/select-dates"}>
          <Text style={{ color: "#fff", textAlign: "center" }}>Continue</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
