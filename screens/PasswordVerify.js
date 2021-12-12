import React from "react";
import { View, StyleSheet, Text, TextInput,TouchableOpacity } from "react-native";

const PasswordVerify = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>
        Enter New Password
      </Text>
      <TextInput style={styles.input} />
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>
        Confirm Password
      </Text>
      <TextInput style={styles.input} />
      <TouchableOpacity><Text style={styles.btn1}>Save Password</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    width: 250,
    marginTop: 20,
    padding: 6,
    borderRadius: 20,
  },
  btn1: {
    backgroundColor: "#FFA500",
    textAlign: "center",
    width: 250,
    color: "#fff",
    padding: 12,
    marginTop: 40,
    marginHorizontal: 60,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PasswordVerify;
