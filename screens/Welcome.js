import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Welcome = (props) => {
  return (
    <View>
      <Image
        style={{
          height: 300,
          width: 250,
          alignItems: "center",
          marginLeft: 50,
        }}
        source={require("../images/Welcome.png")}
      />
      <Text style={styles.logintext}>
        Log In with your Data that you entered during your Registration.
      </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
        <Text style={styles.btn1}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("signin")}>
        <Text style={styles.btn2}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logintext: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginHorizontal: 35,
    marginTop: 20,
  },
  btn1: {
    backgroundColor: "#FFA500",
    textAlign: "center",
    color: "#fff",
    padding: 10,
    marginTop: 70,
    marginHorizontal: 60,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  btn2: {
    backgroundColor: "#FFF",
    textAlign: "center",
    color: "#000000",
    padding: 10,
    marginTop: 40,
    marginHorizontal: 60,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 18,
    borderColor: "#FFA500",
    borderWidth: 3,
  },
});

export default Welcome;
