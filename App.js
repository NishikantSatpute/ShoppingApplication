import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import EmailRegistered from "./screens/EmailRegistered";
import Otp from "./screens/Otp";
import PasswordVerify from "./screens/PasswordVerify";
import Register from "./screens/Register";

function App() {
  return (
    <View style={styles.container}>
       <Login />
      {/* <Register/> */}
      {/* <Welcome /> */}
      {/* <EmailRegistered /> */}
      {/* <Otp /> */}
      {/* <PasswordVerify /> */}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
