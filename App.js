import { StatusBar } from "expo-status-bar";
import React from "react";
import Navbar from "./screens/Navbar";
import Product from "./screens/Product";
import { StyleSheet, Text, View, Button } from "react-native";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import ProductList from "./screens/ProductList";
import Otp from "./screens/Otp";
import PasswordVerify from "./screens/PasswordVerify";
import Register from "./screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import ViewCart from "./screens/ViewCart";
import { HomeScreen } from "./screens/ViewCart";
import { ViewCartHeader } from "./screens/ViewCart";
import { EmailRegistered } from "./screens/EmailRegistered";
import  Grocery  from "./screens/Grocery";
import  Category  from "./screens/Category";

const Stack = createNativeStackNavigator();

const ViewStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="View Cart" component={ViewCartHeader} />
    </Stack.Navigator>
  );
};

const EmailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Email Registered" component={EmailRegistered} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    // <NavigationContainer style={styles.container}>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     {/* <Stack.Screen name="EmailRegistered" component={EmailStack} /> */}
    //     <Stack.Screen name="ViewCart" component={ViewStack} />
    //   </Stack.Navigator>
    //   <StatusBar style="auto" />
    // </NavigationContainer>
    <View style={styles.container}>
       {/* <Login /> */}
      {/* <Register/> */}
      {/* <Navbar /> */}
      {/* <Category/> */}
      <Grocery/>      
      {/* <Welcome /> */}
      {/* <EmailRegistered /> */}
      {/* <Otp /> */}
      {/* <PasswordVerify /> */}
      {/* <ProductList/> */}
      <StatusBar style="auto" />
      {/* <ProductList/> */}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default App;
