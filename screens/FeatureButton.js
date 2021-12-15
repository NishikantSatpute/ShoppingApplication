import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FeatureButton = () => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginHorizontal: 15,
          marginBottom: 10,
        }}
      >
        Features You'll Like
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#90ee90",
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <AntDesign
            name="shoppingcart"
            size={24}
            color="black"
            style={styles.searchicon}
          />
          <Text style={{ fontWeight: "bold" }}>Share Cart</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",

            backgroundColor: "#87CEFA",
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <AntDesign
            name="shoppingcart"
            size={24}
            color="black"
            style={styles.searchicon}
          />
          <Text style={{ fontWeight: "bold" }}>Modify Order</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FCD299",
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <AntDesign
            name="shoppingcart"
            size={24}
            color="black"
            style={styles.searchicon}
          />
          <Text style={{ fontWeight: "bold" }}>Top Order</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchicon: {},
});

export default FeatureButton;
