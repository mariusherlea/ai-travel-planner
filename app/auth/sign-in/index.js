import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

export const options = {
  headerShown: false,
};

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const onSignIn = () => {
    if (!email) {
      ToastAndroid.show("Please enter your Email", ToastAndroid.SHORT);
      return;
    }
    if (!password) {
      ToastAndroid.show("Please enter your Password", ToastAndroid.SHORT);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        ToastAndroid.show("Signed in successfully", ToastAndroid.SHORT);
        router.replace("/(tabs)/mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
          ToastAndroid.show("Invalid Email Format", ToastAndroid.SHORT);
        } else if (errorCode === "auth/wrong-password") {
          ToastAndroid.show("Incorrect Password", ToastAndroid.SHORT);
        } else if (errorCode === "auth/user-not-found") {
          ToastAndroid.show("User does not exist", ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(
            "Sign-in failed. Please try again.",
            ToastAndroid.SHORT
          );
        }
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Let's sign You in</Text>
          <Text style={styles.subHeaderText}>Welcome back</Text>
          <Text style={styles.subHeaderText}>You've been missed!</Text>

          <View style={{ marginTop: 50 }}>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              placeholderTextColor="#aaa"
              onChangeText={setEmail}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text>Password</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Enter password"
                secureTextEntry={!isPasswordVisible}
                placeholderTextColor="#aaa"
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisibility(!isPasswordVisible)}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  size={20}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={onSignIn}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("auth/sign-up")}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Text style={styles.buttonTextSecondary}>Create account</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: "#fff", paddingTop: 40 },
  headerText: { fontFamily: "outfit-bold", fontSize: 30, marginTop: 30 },
  subHeaderText: { fontFamily: "outfit", fontSize: 30, color: "#27cc53" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 15,
    fontFamily: "outfit",
  },
  button: { padding: 20, borderRadius: 15, marginTop: 20 },
  buttonPrimary: { backgroundColor: "#000" },
  buttonSecondary: { backgroundColor: "#fff", borderWidth: 1 },
  buttonText: { color: "#fff", textAlign: "center" },
  buttonTextSecondary: { color: "#000", textAlign: "center" },
});
