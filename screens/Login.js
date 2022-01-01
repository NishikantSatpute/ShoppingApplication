import * as React from "react";
import { Text,Button, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Avatar } from "react-native-paper";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
// import {Navigation} from 'react-navigation';

const Login = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ margin: 0, backgroundColor: "#e4f2ea", height: "100%", width: "100%" }}>
    <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  }
});

export default Login;
