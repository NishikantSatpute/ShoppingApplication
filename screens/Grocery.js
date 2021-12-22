import * as React from "react";
import { Text,Button, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome, Feather, Ionicons} from '@expo/vector-icons';
import Navbar from "./Navbar";


const Grocery = () => {
  return (
    <View style={styles.container}>
      <Navbar/>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Dals</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Dals</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Pulses</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Dry Fruits</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>DMart Grocery</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Cooking Oil</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Ghee and Vanaspati</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Flours and Grains</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Rice and Rice Products</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Masala and Spices</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:"row",justifyContent:"space-between",padding:15,borderBottomWidth:0.5,borderBottomStyle:"solid" }}>
          <Text>Salt/Sugar/Jaggery</Text>
          <AntDesign name="right" size={24} color="#6164e9" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        width:"100%",
      },
});

export default Grocery;
