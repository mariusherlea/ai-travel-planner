import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { useContext } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";

const App = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const OnDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("Please select a date");
      return;
    }
    const totalNumberOfDays = moment(endDate).diff(moment(startDate), "days");
    console.log(totalNumberOfDays + 1);
    setTripData((prevData) => ({
      ...prevData,
      startDate: startDate,
      endDate: endDate,
      totalDays: totalNumberOfDays + 1,
    }));
  };

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Travel Date</Text>

      <CalendarPicker
        onDateChange={onDateChange}
        allowRangeSelection={true} // Single date selection
        minDate={new Date()}
      />

      <TouchableOpacity
        style={styles.continueButton}
        onPress={OnDateSelectionContinue}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  headerText: {
    fontFamily: "outfit",
    fontSize: 25,
    padding: 15,
  },
  selectedDateContainer: {
    marginTop: 20,
  },
  selectedDateText: {
    fontSize: 18,
    textAlign: "center",
  },
  continueButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  continueButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default App;
