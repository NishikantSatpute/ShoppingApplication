import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, TextInput, Avatar } from "react-native-paper";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
// import {Navigation} from 'react-navigation';

const Register = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ marginTop: 60, backgroundColor: "#e4f2ea", height: "100%",margin:10 }}>
      <View style={styles.circle}>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center',marginTop:10 }}><Text style={{ margin: 5,fontSize: 30, color: "white" }}>New Account</Text></View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}><Text style={{ margin: 5, fontSize: 20, color: "white" }} >Sign up and get started</Text></View>
      </View>
      <View style={styles.main}>
        <TextInput style={styles.textg}
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
        />
        <View style={styles.row}>
          <TextInput
            style={{ width: "50%", margin: 5 }}
            label="First Name"
            value={text}
            onChangeText={text => setText(text)}
          />
          <TextInput
            style={{ width: "45%", margin: 5 }}
            label="Last Name"
            value={text}
            onChangeText={text => setText(text)}
          />
        </View>
        <TextInput
          style={styles.textg}
          label="Password"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Button style={{ borderRadius: 18, marginTop: 10, backgroundColor: "orange", color: "white" }}><Text>Sign Up</Text></Button>
        <Button style={{ marginTop: 10 }}><Text>Forgot Password</Text></Button>
        <View style={{ flexDirection: "row", justifyContent:"space-around" }}>
          <Entypo name="facebook" size={60} color="blue" />
          <LinearGradient colors={['#bc1888', '#dc2743', '#f09433']} style={{ borderRadius:10,padding:1 }}>
          <AntDesign name="instagram" size={60} color="white" />
          </LinearGradient>
          <FontAwesome name="twitter-square" size={65} color="aqua" />
        </View>
        <Button style={{ borderRadius: 18, marginTop: 10, borderColor: "orange", borderWidth: 2 }}>Sign In</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  main: {
    margin: 10,
  },
  textg: {
    margin: 5,
  },
  row: {
    flexDirection: "row",
    alignSelf: 'stretch',
  },
  circle: {
    width: 430,
    height: 200,
    backgroundColor: "#6164e9",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 350,
    borderBottomRightRadius: 350,
    borderColor: "white",
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
  },
});


export default Register;
