import * as React from "react";
import { Text,Button, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome, Feather} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Avatar } from "react-native-paper";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
// import {Navigation} from 'react-navigation';

const Navbar = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ margin: 0, backgroundColor: "#fff", height: "100%", width: "100%" }}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <AntDesign name="arrowleft" size={24} color="black" style={{padding: 10,}} />
        <View style={styles.right_side}>
            <FontAwesome name="search" size={24} color="black" style={{padding: 10, fontSize: 20, color:"#6164e9"}}/> 
            <Feather name="shopping-cart" size={24} color="black" style={{padding: 10, fontSize: 20, color:"#6164e9"}}/>  
            <FontAwesome name="user-circle-o" size={24} color="black" style={{padding: 10, fontSize: 20, color:"#6164e9"}} />
        </View>
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
  navbar: {
      backgroundColor: "#fff",
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
      elevation: 15,
  },
  right_side:{
    flexDirection: "row", 
  }
});

export default Navbar;
