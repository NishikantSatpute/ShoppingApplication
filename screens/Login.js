import * as React from "react";
import { Text,Button, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { TextInput, Avatar } from "react-native-paper";
// import { Icon } from 'react-native-elements';
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
        <View
          style={{ flex: 1, paddingTop: 20, flexDirection: "row", justifyContent: "center", width: "100%" }}
        >
          <Text
            style={{ padding: 15, fontSize: 30, color: "white" }}
          >
            Welcome!
          </Text>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Text style={{ padding: 0, fontSize: 20, color: "white" }}>
            Sign in and get started
          </Text>
        </View>
      </View>
      <View style={styles.main}>
        <TextInput
          style={styles.textg}
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <TextInput
          style={styles.textg}
          label="Password"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity>
        <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Text style={{textAlign: "center", margin:15, fontSize:15, color:"#6164e9"}}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <View style={{ margin: 5, height: 20, width: "33%" }}>
            <Text>Facebook</Text>
            {/* <Icon
            reverse
            name='ios-american-football'
            type='ionicon'
            color='#517fa4'
            /> */}
          </View>
          <View style={{ margin: 5, width: "33%" }}>
            <Text>Instagram</Text>
          </View>
          <View style={{ margin: 5, width: "33%" }}>
            <Text>Twitter</Text>
          </View>
        </View>
        <TouchableOpacity >
        <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
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
    padding: 8,
  },
  main: {
    margin: 10,
    marginTop: 20,
  },
  textg: {
    margin: 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
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
  btn:{
    borderRadius: 50,
    marginTop: 30,
    backgroundColor: "orange",
    color: "#fff",
    padding: 12,
    // marginHorizontal: 60,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Register;
