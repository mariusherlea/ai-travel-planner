import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { SelectBudgetList } from "../../constants/Options";
import { CreateTripContext } from "../../context/CreateTripContext";

import BudgetCard from "../../components/CreateTrip/BudgetCard";
import { Link } from "expo-router";

export default function SelectBudget() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [selectBudget, setSelectBudget] = useState();

  useEffect(() => {
    setTripData((prevData) => ({ ...prevData, budget: selectBudget }));
  }, [selectBudget]);
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
        Whit what cost are you traveling ?
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit", fontSize: 25, marginLeft: 20 }}>
          Choose your budget
        </Text>
        <FlatList
          data={SelectBudgetList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectBudget(item)}
              style={{ margin: 20 }}
            >
              <BudgetCard option={item} selectBudget={selectBudget} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity style={{ padding: 15, backgroundColor: "#000" }}>
        <Link href={"/"}>
          <Text style={{ color: "#fff", textAlign: "center" }}>Continue</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
