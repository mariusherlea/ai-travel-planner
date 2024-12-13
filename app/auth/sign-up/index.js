import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUp() {
  const router = useRouter();
  useEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);
  const navigations = useNavigation();
  useEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30, marginTop: 30 }}>
        Create new Account
      </Text>
      {/* User full name */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit" }}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Full name" />
      </View>
      {/* Email */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" />
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
      {/* Create Button */}
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: "#000",
          marginTop: 20,
          borderRadius: 15,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Create account
        </Text>
      </TouchableOpacity>
      {/* Sign In Button */}
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
        style={{
          padding: 20,
          backgroundColor: "#fff",
          marginTop: 20,
          borderRadius: 15,
          borderWidth: 1,
        }}
      >
        <Text style={{ textAlign: "center" }}>Sign In</Text>
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
