import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ToastAndroid,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Restart } from 'fiction-expo-restart';


const Otp = (props) => {

  const [otp, setOtp] = useState('');
  
  const verifyOtp = async () => {
    // console.log("In the function.")
    // console.log(email)
    // console.log(password)
    try {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
      }
      const email = await AsyncStorage.getItem('email')
      const response = await fetch("http://10.0.2.2:3000/otp", {
        method: "POST",
        body: JSON.stringify({ "email": email, "otp": otp }),
        headers: headersList
      })
      const data = await response.json();
      const msg = data.msg;

      if (msg == "otpnull") {
        ToastAndroid.showWithGravity(
          "Enter the otp!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      }
      if (msg == "wrongOtp") {
        ToastAndroid.showWithGravity(
          "Wrong Verification Code!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      }
      if (msg == "success") {
        ToastAndroid.showWithGravity(
          "Code Verified Successfully!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        const tokenf = await AsyncStorage.getItem('tokenf')
        await AsyncStorage.setItem('token',tokenf).then(() => { Restart() })
      }

      

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>Enter OTP</Text>
      <TextInput textAlign={'center'} value={otp} onChangeText={text => setOtp(text)} style={styles.input} />
      <TouchableOpacity onPress={() => verifyOtp()}>
        <Text style={styles.btn1}>Verify</Text>
      </TouchableOpacity>
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
    marginTop: 30,
    padding: 6,
    borderRadius: 20,
  },
  btn1: {
    backgroundColor: "#FFA500",
    textAlign: "center",
    width: 250,
    color: "#fff",
    padding: 12,
    marginTop: 30,
    marginHorizontal: 60,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Otp;
