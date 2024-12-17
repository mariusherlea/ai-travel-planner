import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useContext } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import { useRouter } from "expo-router";

export default function SearchPlace() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    console.log("tripData:", tripData);
  }, [tripData]);
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search for a place"
        onPress={(data, details = null) => {
          // console.log("Selected Data:", data);
          if (details) {
            // console.log("Details:", details.geometry.location);
          }
          setTripData({
            ...tripData,
            locationInfo: {
              name: data.description,
              coordinates: details.geometry.location,
              photoRef: details.photos[0].photo_reference,
              url: details.url,
            },
          });
          router.push("create-trip/select-traveler");
        }}
        query={{
          key: "AIzaSyBB12I7Guey0uZpeyePJzwYVnHnU4muVGU",
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
    },
    textInput: {
      borderWidth: 1,
      borderRadius: 15,
      margintop: 20,
    },
  },
});
