import React from "react"; 
import { View, StyleSheet,ScrollView, Text, Image,TouchableOpacity } from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ProductList = () => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal={true} style={{ borderStyle: "solid", borderWidth: 1,borderColor:"black"}}>
        <TouchableOpacity style={styles.productmenu}>
          <Text style={styles.menuproduct, { backgroundColor: "green", color: "white", textAlign: "center",padding:5,borderRadius:15}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productmenu}>
          <Text style={styles.menuproduct, { textAlign: "center",color:"gray", padding: 5, borderRadius: 15, borderWidth:2,borderStyle:"solid",borderColor:"gray"}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productmenu}>
          <Text style={styles.menuproduct, { textAlign: "center", color: "gray", padding: 5, borderRadius: 15, borderWidth: 2, borderStyle: "solid", borderColor: "gray" }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productmenu}>
          <Text style={styles.menuproduct, { textAlign: "center", color: "gray", padding: 5, borderRadius: 15, borderWidth: 2, borderStyle: "solid", borderColor: "gray" }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productmenu}>
          <Text style={styles.menuproduct, { textAlign: "center", color: "gray", padding: 5, borderRadius: 15, borderWidth: 2, borderStyle: "solid", borderColor: "gray" }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productmenu}>
          <Text style={styles.menuproduct, { textAlign: "center", color: "gray", padding: 5, borderRadius: 15, borderWidth: 2, borderStyle: "solid", borderColor: "gray" }}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={{ height: "92%",width:"100%"}}>
        <TouchableOpacity style={styles.productitems}>
          <View style={{ height: "100%", width: "15%",marginLeft:10 }}>
            <Image style={{ height: "80%", width: "100%" }} source={require("../images/Welcome.png")} />
          <Text>$14 OFF</Text>
          </View>
          <View>
            <Text style={{ borderWidth: 3, borderStyle: "solid", borderColor: "black" }}>Channa Dal: 1 Kg</Text>
          </View>
          
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:"100%"
  },
  menuproduct:{
    color:"gray",
  },
  productmenu:{
    borderRadius:10,
    height:50,
    width:100,
    padding:5,
    margin:3,    
  },
  productitems:{
    width:"100%",
    height:200,
    borderStyle:"solid",
    borderWidth:1,
  },
});

export default ProductList;
