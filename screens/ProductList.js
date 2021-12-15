import React from "react"; 
import { View, StyleSheet,Image, Text, TextInput,TouchableOpacity } from "react-native";

const ProductList = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 300,
          width: 300,
          alignItems: "center",
          marginLeft: 50,
        }}
        source={require("../images/smile.png")}
      />
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductList;
