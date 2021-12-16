import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="search1"
        size={24}
        color="black"
        style={styles.searchicon}
      />
      <TextInput
       style={styles.input}  placeholder="Aapko Kya Chahiye" />
      <TextInput style={styles.btn1} editable={false} >Search</TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    borderTopWidth:0.4,
    shadowOpacity: 0.8,
    shadowColor: '#000',
    padding:5,
        shadowOpacity:  0.4,
        elevation: 2,
  },
  searchicon: {
    position: "absolute",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  input: {
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    width: 230,
    height: 50,
  },
  btn1: {
    backgroundColor: "#4BB543",
    textAlign: "center",
    width: "30%",
    color: "#fff",
    padding: 12,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Header;
