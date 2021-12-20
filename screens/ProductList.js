import React from "react"; 
import { View, StyleSheet,ScrollView, Text, Image,TouchableOpacity } from "react-native";
import Navbar from "./Navbar";
import SelectDropdown from 'react-native-select-dropdown';
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Button } from "react-native-paper";
// import { Feather } from '@expo/vector-icons';
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

const ProductList = () => {
  const countries = ["2 kg", "3 kg", "4 kg", "5 kg"];
  return (
    <View style={styles.container}>
        {/* <Navbar/> */}
      <View style={styles.navbar}>
        <AntDesign name="arrowleft" size={24} color="black" style={{ padding: 10, }} />
        <View style={styles.right_side}>
          <FontAwesome name="search" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#6164e9" }} />
          <Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#6164e9" }} />
          <FontAwesome name="user-circle-o" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#6164e9" }} />
        </View>
      </View>
      <ScrollView horizontal={true} style={{
        borderStyle: "solid", borderWidth: 1, borderColor: "black", backgroundColor: '#fff', shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,}}>
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
          <View style={{ height: "100%", width: "100%",marginLeft:10,flexDirection:"row" }}>
            <View style={{ height: "100%", width: "20%" }}>
            <Image style={{ height: "80%", width: "100%" }} source={require("../images/Welcome.png")} />
            <Text>$14 OFF</Text>
            </View>
            <View style={{ width: "80%",flexDirection:"column"}}>
            <Text style={{ marginLeft:30,width:"100%",fontSize:20,marginTop:20 }}>Chana Dal: 1 Kg</Text>
            <View style={{ width: 10, height: 10, marginTop: 20,margin:10 }}>
            <SelectDropdown
              
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              defaultButtonText="1 kg"
              buttonStyle = {{ margin:20,width:100,height:30,borderRadius:10 }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
            </View>
            <View style={{flexDirection:"row",marginTop:40,margin:30}}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{color:"green",fontSize:20}}>DMart $14</Text>
                  <Text style={{ textAlign: "right", fontSize: 15}}>MRP $14</Text>
                  <Text>Incl. of taxes</Text>
                </View>
                <View style={{ justifyContent:"center",alignItems:"flex-start",margin:20,width:"100%" }}>
                  <TouchableOpacity style={{backgroundColor:"green",padding:10,borderRadius:5,width:100,alignItems:"center"}}>
                    <Text style={{ color: "white" }}><Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#fff" }} />  ADD</Text>
                  </TouchableOpacity>
                </View>
            </View>
            </View>
          </View>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.productitems}>
          <View style={{ height: "100%", width: "100%", marginLeft: 10, flexDirection: "row" }}>
            <View style={{ height: "100%", width: "20%" }}>
              <Image style={{ height: "80%", width: "100%" }} source={require("../images/Welcome.png")} />
              <Text>$14 OFF</Text>
            </View>
            <View style={{ width: "80%", flexDirection: "column" }}>
              <Text style={{ marginLeft: 30, width: "100%", fontSize: 20, marginTop: 20 }}>Chana Dal: 1 Kg</Text>
              <View style={{ width: 10, height: 10, marginTop: 20, margin: 10 }}>
                <SelectDropdown

                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  defaultButtonText="1 kg"
                  buttonStyle={{ margin: 20, width: 100, height: 30, borderRadius: 10 }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", marginTop: 40, margin: 30 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "green", fontSize: 20 }}>DMart $14</Text>
                  <Text style={{ textAlign: "right", fontSize: 15 }}>MRP $14</Text>
                  <Text>Incl. of taxes</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "flex-start", margin: 20, width: "100%" }}>
                  <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 5, width: 100, alignItems: "center" }}>
                    <Text style={{ color: "white" }}><Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#fff" }} />  ADD</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.productitems}>
          <View style={{ height: "100%", width: "100%", marginLeft: 10, flexDirection: "row" }}>
            <View style={{ height: "100%", width: "20%" }}>
              <Image style={{ height: "80%", width: "100%" }} source={require("../images/Welcome.png")} />
              <Text>$14 OFF</Text>
            </View>
            <View style={{ width: "80%", flexDirection: "column" }}>
              <Text style={{ marginLeft: 30, width: "100%", fontSize: 20, marginTop: 20 }}>Chana Dal: 1 Kg</Text>
              <View style={{ width: 10, height: 10, marginTop: 20, margin: 10 }}>
                <SelectDropdown

                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  defaultButtonText="1 kg"
                  buttonStyle={{ margin: 20, width: 100, height: 30, borderRadius: 10 }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", marginTop: 40, margin: 30 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "green", fontSize: 20 }}>DMart $14</Text>
                  <Text style={{ textAlign: "right", fontSize: 15 }}>MRP $14</Text>
                  <Text>Incl. of taxes</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "flex-start", margin: 20, width: "100%" }}>
                  <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 5, width: 100, alignItems: "center" }}>
                    <Text style={{ color: "white" }}><Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#fff" }} />  ADD</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.productitems}>
          <View style={{ height: "100%", width: "100%", marginLeft: 10, flexDirection: "row" }}>
            <View style={{ height: "100%", width: "20%" }}>
              <Image style={{ height: "80%", width: "100%" }} source={require("../images/Welcome.png")} />
              <Text>$14 OFF</Text>
            </View>
            <View style={{ width: "80%", flexDirection: "column" }}>
              <Text style={{ marginLeft: 30, width: "100%", fontSize: 20, marginTop: 20 }}>Chana Dal: 1 Kg</Text>
              <View style={{ width: 10, height: 10, marginTop: 20, margin: 10 }}>
                <SelectDropdown

                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  defaultButtonText="1 kg"
                  buttonStyle={{ margin: 20, width: 100, height: 30, borderRadius: 10 }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", marginTop: 40, margin: 30 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "green", fontSize: 20 }}>DMart $14</Text>
                  <Text style={{ textAlign: "right", fontSize: 15 }}>MRP $14</Text>
                  <Text>Incl. of taxes</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "flex-start", margin: 20, width: "100%" }}>
                  <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 5, width: 100, alignItems: "center" }}>
                    <Text style={{ color: "white" }}><Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#fff" }} />  ADD</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.productitems}>
          <View style={{ height: "100%", width: "100%", marginLeft: 10, flexDirection: "row" }}>
            <View style={{ height: "100%", width: "20%" }}>
              <Image style={{ height: "80%", width: "100%" }} source={require("../images/Welcome.png")} />
              <Text>$14 OFF</Text>
            </View>
            <View style={{ width: "80%", flexDirection: "column" }}>
              <Text style={{ marginLeft: 30, width: "100%", fontSize: 20, marginTop: 20 }}>Chana Dal: 1 Kg</Text>
              <View style={{ width: 10, height: 10, marginTop: 20, margin: 10 }}>
                <SelectDropdown

                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  defaultButtonText="1 kg"
                  buttonStyle={{ margin: 20, width: 100, height: 30, borderRadius: 10 }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", marginTop: 40, margin: 30 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "green", fontSize: 20 }}>DMart $14</Text>
                  <Text style={{ textAlign: "right", fontSize: 15 }}>MRP $14</Text>
                  <Text>Incl. of taxes</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "flex-start", margin: 20, width: "100%" }}>
                  <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 5, width: 100, alignItems: "center" }}>
                    <Text style={{ color: "white" }}><Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#fff" }} />  ADD</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.productitems}>
          <View style={{ height: "100%", width: "100%", marginLeft: 10, flexDirection: "row" }}>
            <View style={{ height: "100%", width: "20%" }}>
              <Image style={{ height: "80%", width: "100%" }} source={require("../images/Welcome.png")} />
              <Text>$14 OFF</Text>
            </View>
            <View style={{ width: "80%", flexDirection: "column" }}>
              <Text style={{ marginLeft: 30, width: "100%", fontSize: 20, marginTop: 20 }}>Chana Dal: 1 Kg</Text>
              <View style={{ width: 10, height: 10, marginTop: 20, margin: 10 }}>
                <SelectDropdown

                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  defaultButtonText="1 kg"
                  buttonStyle={{ margin: 20, width: 100, height: 30, borderRadius: 10 }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
                />
              </View>
              <View style={{ flexDirection: "row", marginTop: 40, margin: 30 }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "green", fontSize: 20 }}>DMart $14</Text>
                  <Text style={{ textAlign: "right", fontSize: 15 }}>MRP $14</Text>
                  <Text>Incl. of taxes</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "flex-start", margin: 20, width: "100%" }}>
                  <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 5, width: 100, alignItems: "center" }}>
                    <Text style={{ color: "white" }}><Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#fff" }} />  ADD</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    borderBottomColor:"black",
    borderBottomWidth:1,
  },
  navbar: {
    backgroundColor: "#fff",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    width:"100%",
    elevation: 15,
  },
  right_side: {
    flexDirection: "row",
  }
});

export default ProductList;
