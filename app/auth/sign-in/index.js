import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignIn() {
  const navigations = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        height: "100%",
        backgroundColor: "#fff",
        paddingTop: 40,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontFamily: "outfit-bold", fontSize: 30, marginTop: 30 }}>
        Let's sign You in
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: "#27cc53",
          marginTop: 20,
        }}
      >
        Welcome back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: "#27cc53",
          marginTop: 10,
        }}
      >
        You've been missed !
      </Text>
      {/* Email */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>
      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
        />
      </View>
      {/* Sign In Button */}
      <View
        style={{
          padding: 20,
          backgroundColor: "#000",
          marginTop: 20,
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Sign In</Text>
      </View>
      {/* Create Button */}
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-up")}
        style={{
          padding: 20,
          backgroundColor: "#fff",
          marginTop: 20,
          borderRadius: 15,
          borderWidth: 1,
        }}
      >
        <Text style={{ textAlign: "center" }}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    fontFamily: "outfit",
  },
});
