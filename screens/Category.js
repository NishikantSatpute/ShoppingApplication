import * as React from "react";
import { Text, Button, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Entypo, AntDesign, FontAwesome, Feather, Ionicons } from '@expo/vector-icons';
import Navbar from "./Navbar";


const Category = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView style={{ height: "100%" }}>
                <View style={{ flexDirection: "row", height: 180 }}>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%", borderRightWidth: 0.5, borderRightStyle: "solid", }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%", borderRightWidth: 0.5, borderRightStyle: "solid", }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%" }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", height: 180 }}>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%", borderRightWidth: 0.5, borderRightStyle: "solid", }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%", borderRightWidth: 0.5, borderRightStyle: "solid", }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%" }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", height: 180 }}>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%", borderRightWidth: 0.5, borderRightStyle: "solid", }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%", borderRightWidth: 0.5, borderRightStyle: "solid", }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%" }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", height: 180 }}>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%", borderRightWidth: 0.5, borderRightStyle: "solid", }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%", borderRightWidth: 0.5, borderRightStyle: "solid", }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 20, borderBottomWidth: 0.5, borderBottomStyle: "solid", height: "100%", width: "33%" }}>
                        <Image style={{ height: 100, width: "100%" }} source={require("../images/Welcome.png")} />
                        <Text style={{ textAlign: "center" }}>Dals</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ flexDirection: "row", height: 40, marginBottom: 20, justifyContent: "center", borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: "black", padding: 5 }}>
                    <Text style={{ color: "#6164e9" }}>View More </Text>
                    <AntDesign name="caretright" size={24} color="#6164e9" />
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        flexDirection: "column"
    },
});

export default Category;