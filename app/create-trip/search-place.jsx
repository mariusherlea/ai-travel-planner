import { View, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";

export default function SearchPlace() {
  const googleApiKey = process.env.GOOGLE_MAPS_API_KEY;

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search for a place"
        onPress={(data, details = null) => {
          console.log("Selected Data:", data);
          if (details) {
            console.log("Details:", details.geometry.location);
          }
        }}
        query={{
          key: Constants.expoConfig.extra.googleMapsApiKey,
          language: "en",
        }}
        fetchDetails={true}
        debounce={200}
        styles={styles.autocomplete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  autocomplete: {
    textInputContainer: {
      backgroundColor: "#e5e5e5",
      borderRadius: 5,
      marginBottom: 10,
    },
    textInput: {
      height: 38,
      color: "#5d5d5d",
      fontSize: 16,
    },
  },
});
