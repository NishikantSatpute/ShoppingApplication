import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header2 = () => {
  return (
    <View style={{display:'flex',flexDirection:'row',marginTop:-25,marginHorizontal:5}}>
      <Text style={styles.btn2}>View All {"\n"} Catogries</Text>
      <Image
        style={{
          height: 50,
          width: "100%",
          marginTop:45,
          marginLeft:-120,
          alignItems: "center",
          resizeMode: "contain",
        }}
        source={require("../images/banner1.jpg")}
      />
       <Image
        style={{
          height: 50,
          width: "100%",
          marginTop:45,
          marginLeft:-300,
          alignItems: "center",
          resizeMode: "contain",
        }}
        source={require("../images/banner1.jpg")}
      />
       <Image
        style={{
          height: 50,
          width: "100%",
          marginTop:45,
          marginLeft:-300,
          alignItems: "center",
          resizeMode: "contain",
        }}
        source={require("../images/banner1.jpg")}
      />
      <MaterialIcons name="navigate-next" size={50} color="green" style={{marginLeft:-130,marginTop:44}} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn2: {
    backgroundColor: "#FFF",
    textAlign: "center",
    color: "#4BB543",
    padding: 6,
    marginTop: 40,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 17,
    borderColor: "#4BB543",
    borderWidth: 2,
    width: "28%",
  },
});

export default Header2;
