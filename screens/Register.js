import React,{useState} from "react";
import { Button, Text, View, StyleSheet, ToastAndroid, TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, Avatar } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Restart } from 'fiction-expo-restart';


const Register = (props) => {
  const [email,setEmail]=useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  var chars = "0123456789";
  var passwordLength = 7;
  var otp = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    otp += chars.substring(randomNumber, randomNumber + 1);
  }

  const sendData = async() =>
      {
        // console.log("In the function.")
        // console.log(firstname)
        // console.log(lastname)
        // console.log(password)
        // console.log(otp)
        // console.log(email)
        try {
          let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
          }

          const response = await fetch("http://10.0.2.2:3000/signup", {
            method: "POST",
            body: JSON.stringify({ "email": email,"password":password,"firstName":firstname,"lastName":lastname,"otp":otp}),
            headers: headersList
          })
          const data = await response.json();
          const token1 = data.token;
          //console.log(data)
          
          //if already register
          if (data.code == 11000 && data.keyValue.email==email)
          {
            ToastAndroid.showWithGravity(
              "Email Already register.",
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM
            );
          }

          const storeData = async (token1) => {
                try {
                  //console.log(data.token);
                  await AsyncStorage.setItem('email', email);
                  await AsyncStorage.setItem('tokenf', token1).then(() => {
                    ToastAndroid.showWithGravity(
                      "Register Successfully!",
                      ToastAndroid.SHORT,
                      ToastAndroid.BOTTOM
                    );
                  }).then(() => { props.navigation.navigate("otp") })
                } catch (e) {
                  console.log("Error:",e)
                }
              }
              
          storeData(token1)

          // const getData = async () => {
          //   try {
          //     const value = await AsyncStorage.getItem('token')
          //     if (value !== null) {
          //       // value previously stored
          //       console.log(value)
          //     }
          //   } catch (e) {
          //     // error reading value
          //   }
          // }
          // getData()

        } catch (error) {
          console.log(error)
        }
      }
      

  return (
    <View style={{ margin: 0, backgroundColor: "#e4f2ea", height: "100%", width: "100%" }}>
      <View style={styles.circle}>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center',marginTop:30 }}><Text style={{ margin: 5,fontSize: 30, color: "white" }}>New Account</Text></View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}><Text style={{ margin: 5, fontSize: 20, color: "white" }} >Sign up and get started</Text></View>
      </View>
      <View style={styles.main}>
        <TextInput style={styles.textg}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.row}>
          <TextInput
            style={{ width: "50%", margin: 5, borderTopLeftRadius: 20,backgroundColor:"white" }}
            label="First Name"
            value={firstname}
            onChangeText={(text)=>setFirstname(text)}
          />
          <TextInput
            style={{ width: "45%", margin: 5, borderTopRightRadius: 20, backgroundColor: "white" }}
            label="Last Name"
            value={lastname}
            onChangeText={(text) => setLastname(text)}
          />
        </View>
        <TextInput
          style={styles.textg}
          secureTextEntry={true}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={()=>sendData()}>
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
        <TouchableOpacity onPress={() => props.navigation.navigate("signin")}>
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
