import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Banner2 = ({ name }) => {
  return (
    <View style={{ marginHorizontal: 7 }}>
      <Text style={styles.offer}>{name}</Text>
      <Image
        style={{
          height: 300,
          width: "100%",
          marginBottom: -30,
          alignItems: "center",
          resizeMode: "contain",
        }}
        source={require("../images/banner1.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  offer: {
    position: "absolute",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Banner2;
