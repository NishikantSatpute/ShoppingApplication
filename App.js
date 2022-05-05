import { StatusBar } from "expo-status-bar";
import React,{useEffect,useState} from "react";
import Navbar from "./screens/Navbar";
import Navbar2 from "./screens/Navbar2";
import Product from "./screens/Product";
import { StyleSheet, Text, View, Button } from "react-native";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import ProductList from "./screens/ProductList";
import Otp from "./screens/Otp";
import PasswordVerify from "./screens/PasswordVerify";
import Register from "./screens/Register";
import Banner from "./screens/Banner";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { ViewCartHeader } from "./screens/ViewCart";
import { HomeScreen } from "./screens/ViewCart";
import  Category  from "./screens/Category";
import { EmailRegistered } from "./screens/EmailRegistered";
import  QRScan from "./screens/QRScan";
import  Grocery  from "./screens/Grocery";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


//for remove toekn.
const removeItemValue = async(key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  }
  catch (exception) {
    return false;
  }
}
removeItemValue('token')


const ViewStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="View Cart" component={ViewCartHeader} />
    </Stack.Navigator>
  );
};

const EmailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Email Registered" component={EmailRegistered} />
    </Stack.Navigator>
  );
};

function App() {
  const [isloggedin,setLogged] = useState(null)

  useEffect(async()=>{
    const token = await AsyncStorage.getItem('token')
    const verify = await AsyncStorage.getItem('verify')
    //await AsyncStorage.setItem('email', "pravinvkale889@gmail.com");
    const email = await AsyncStorage.getItem('email')
    console.log(email);
    if(token)
    {
      setLogged(true)
    }
    else
    {
      setLogged(false)
    }
  },[])

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      {
        isloggedin==null?
        (
          <>
          {/* <Stack.Screen name="Productlist" component={ProductList} /> */}
          <Stack.Screen name="QRScan" component={QRScan} />
          <Stack.Screen name="Welcome" component={Welcome} />
          </>
        )
        : isloggedin==true?
        (
              <>
                  <Stack.Screen name="Home" component={ViewCartHeader} />  
              </>
        )
        :
        (
          <>
           {/* <Stack.Screen name="Productlist" component={ProductList} /> */}
          <Stack.Screen name="Home" component={ViewCartHeader} />
          <Stack.Screen name="QRScan" component={QRScan} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="signup" component={Register} />
          <Stack.Screen name="signin" component={Login} />
          <Stack.Screen name="otp" component={Otp} />
          </>
        )
      }
        {/* <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={ViewCartHeader} />  
        <Stack.Screen name="signup" component={Register} />
        <Stack.Screen name="signin" component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default App;
