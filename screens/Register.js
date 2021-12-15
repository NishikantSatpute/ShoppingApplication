import * as React from "react";
import { Button,Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Avatar } from "react-native-paper";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
// import {Navigation} from 'react-navigation';

const Register = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ margin: 0, backgroundColor: "#e4f2ea", height: "100%", width: "100%" }}>
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
            style={{ width: "50%", margin: 5, borderTopLeftRadius: 20,backgroundColor:"white" }}
            label="First Name"
            value={text}
            onChangeText={text => setText(text)}
          />
          <TextInput
            style={{ width: "45%", margin: 5, borderTopRightRadius: 20, backgroundColor: "white" }}
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
        <TouchableOpacity>
          <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: 10, color:"#6164e9" ,fontSize:18 }}>Sign Up With</Text>
        <View style={{ flexDirection: "row", justifyContent:"space-around",marginTop:30,marginBottom:30 }}>
          <Entypo name="facebook" size={60} color="blue" />
          <LinearGradient colors={['#bc1888', '#dc2743', '#f09433']} style={{ borderRadius:10,padding:1 }}>
          <AntDesign name="instagram" size={60} color="white" />
          </LinearGradient>
          <FontAwesome name="twitter-square" size={65} color="aqua" />
        </View>
        <TouchableOpacity>
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>
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
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row: {
    flexDirection: "row",
    alignSelf: 'stretch',
  },
  circle: {
    width: "100%",
    height: 190,
    backgroundColor: "#6164e9",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 350,
    borderBottomRightRadius: 350,
    borderColor: "white",
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    marginBottom: 30,
  },
  btn: {
    borderRadius: 50,
    margin: 30,
    backgroundColor: "orange",
    color: "#fff",
    padding: 12,
    // marginHorizontal: 60,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin:5,
  },
});


export default Register;
