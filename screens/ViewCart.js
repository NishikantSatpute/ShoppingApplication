import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Constant from "expo-constants";
import ViewCartDetail from "./ViewCartDetail";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("View Cart")}
      />
    </View>
  );
};

export const ViewCartHeader = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 90,
          elevation: 6,
          backgroundColor: "#d9d9d9",
          shadowColor: "#000000",
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1,
          },
          marginTop: Constant.setStatusBarHeight,
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 50 }}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={{ marginRight: 20 }}
            onPress={() => navigation.navigate("Home")}
          />
          <Text style={{ fontSize: 20 }}>View cart</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 50,
            marginRight: 10,
            justifyContent: "space-around",
            width: 120,
          }}
        >
          <AntDesign name="search1" size={24} color="black" />
          <AntDesign name="shoppingcart" size={24} color="black" />
          <AntDesign name="adduser" size={24} color="black" />
        </View>
      </View>
      <View>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="black"
          style={{ fontWeight: "bold", bottom: -290, textAlign: "center" }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            bottom: -300,
            textAlign: "center",
          }}
        >
          Your Shpping Cart is Empty Start Shopping Now!
        </Text>
      </View>
      <View>
        <Text style={styles.btn1}>Verify</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn1: {
    backgroundColor: "#4BB543",
    textAlign: "center",
    width: 320,
    color: "#fff",
    padding: 10,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 6,
    fontWeight: "bold",
    fontSize: 18,
    bottom: -530,
  },
});
