import { Text, View } from "react-native";
import Login from "../components/Login";
import { auth } from "@/configs/FirebaseConfig";

export default function Index() {
  const user = auth.currentUser;
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
}
