import { View, Text, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";

export default function SignUp() {
  const router = useRouter();
  const navigations = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);

  const OnCreateAccount = () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show("Please enter all details", ToastAndroid.SHORT);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        router.replace("auth/sign-in");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
        <TextInput
          style={styles.input}
          placeholder="Enter Full name"
          onChangeText={(e) => setFullName(e)}
        />
      </View>
      {/* Email */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter email"
          onChangeText={(e) => setEmail(e)}
        />
      </View>
      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit" }}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
      </View>
      {/* Create Button */}
      <TouchableOpacity
        onPress={OnCreateAccount}
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
