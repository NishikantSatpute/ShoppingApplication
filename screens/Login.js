import * as React from "react";
import { useState } from "react";
import { Button, Text, View, StyleSheet, ToastAndroid,TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Avatar } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Restart } from 'fiction-expo-restart';
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
// import {Navigation} from 'react-navigation';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendData = async () => {
        // console.log("In the function.")
        // console.log(email)
        // console.log(password)
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
      }

      const response = await fetch("https://lovely-candles-fold-106-210-192-174.loca.lt/signin", {
        method: "POST",
        body: JSON.stringify({ "email": email, "password": password }),
        headers: headersList
      })
      const data = await response.json();
      const msg = data.msg;
      if (msg == "nullemailpass")
      {
        ToastAndroid.showWithGravity(
          "must provide email or password!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      }
      if (msg == "wrongEmail")
      {
        ToastAndroid.showWithGravity(
          "Email is not registered!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      }
      if (msg == "wrongPass") {
        ToastAndroid.showWithGravity(
          "Password is wrong!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      }
      if(msg == "success")
      {
        ToastAndroid.showWithGravity(
          "Login Successfully!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        const storeData = async () => {
          try {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('token', data.token).then(() => { Restart() } )
          } catch (e) {
            console.log("Error:", e)
          }
        }
        storeData()
      }

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <View style={{ margin: 0, backgroundColor: "#e4f2ea", height: "100%", width: "100%" }}>
      <View style={styles.circle}>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', marginTop: 30 }}><Text style={{ margin: 5, fontSize: 30, color: "white" }}>New Account</Text></View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}><Text style={{ margin: 5, fontSize: 20, color: "white" }} >Sign in and get started</Text></View>
      </View>
      <View style={styles.main}>
        <TextInput style={styles.textg}
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.textg}
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={() => sendData()}>
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: 10, color: "#6164e9", fontSize: 18 }}>Forgot Password?</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30, marginBottom: 30 }}>
          <Entypo name="facebook" size={60} color="blue" />
          <LinearGradient colors={['#bc1888', '#dc2743', '#f09433']} style={{ borderRadius: 10, padding: 1 }}>
            <AntDesign name="instagram" size={60} color="white" />
          </LinearGradient>
          <FontAwesome name="twitter-square" size={65} color="aqua" />
        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("signup")}>
          <Text style={styles.btn}>Sign Up</Text>
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
    margin: 5,
  },
});


export default Login;
