import * as React from "react";
import { Text,Button, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome, Feather} from '@expo/vector-icons';
import Navbar from "./Navbar";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Avatar } from "react-native-paper";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
// import {Navigation} from 'react-navigation';

const Product = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ marginTop: 0, backgroundColor: "#6164e9", height: "10%", width: "100%" }}>
      < Navbar/>
      <View style={styles.product_style}>
        <Text style={{color: "black", borderWidth:2,borderColor:"red"}}> Chana Dal: 1kg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    // padding: 8,
  },
  product_style: {
    marginTop: 50,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  }
});

export default Product;
