import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./screens/Navbar";
import Product from "./screens/Product";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import EmailRegistered from "./screens/EmailRegistered";
import ProductList from "./screens/ProductList";
import Otp from "./screens/Otp";
import PasswordVerify from "./screens/PasswordVerify";
import Register from "./screens/Register";

function App() {
  return (
    <View style={styles.container}>
       {/* <Login /> */}
      {/* <Register/> */}
      {/* <Navbar /> */}
      {/* <Product /> */}
      {/* <Welcome /> */}
      {/* <EmailRegistered /> */}
      {/* <Otp /> */}
      {/* <PasswordVerify /> */}
      <ProductList/>
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
