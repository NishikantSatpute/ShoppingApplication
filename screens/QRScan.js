import React, { useState,state, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ToastAndroid, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Navbar from './Navbar';
import { Camera } from 'expo-camera';
import { Entypo, AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QRScan = (props) => {

    // state = {
    //     pic: require("../Products/blank.png")
    // }

    const quantity = ["250", "500", "750", "1000"];
    const [hasPermission, setHasPermission] = useState(null);
    const [productname, setProductName] = useState("Product not Selected");
    const [productprice, setProductPrice] = useState(null);
    const [productweight, setProductWeight] = useState("250gm");
    const [qrcode, setQrCode] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    //Add product into cart
    const addproduct = async() =>{
        const email = await AsyncStorage.getItem('email')
        if(email==null||productname==null||productprice==null||qrcode==null||productweight==null)
        {
            ToastAndroid.showWithGravity(
                "Product Not Selected!",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
        }
        else
        {


        console.log(email);
        console.log(productname);
        console.log(productprice);
        console.log(qrcode);
            let productweight1;
        console.log(productweight);
            let price = productprice;
        if(productweight=="500")
        {
            price = productprice*2;
        }
        if (productweight == "750") {
            price = productprice * 3;
        }
        if (productweight == "1000") {
            price = productprice * 4;
        }

        let weight = Number(productweight);
        
        try {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

            const response = await fetch("https://ten-camels-argue-103-51-24-90.loca.lt/addbill", {
            method: "POST",
            body: JSON.stringify({"productcode": qrcode,"email": email,"productname": productname,"productprice": price,"productweight": weight }),
            headers: headersList
        })
        const data = await response.json();
            console.log(data)
            if(data.msg == "success")
            {
                ToastAndroid.showWithGravity(
                    "Added Successfully!",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );
            }
        }
        catch(err)
        {
            console.log(err)
        }   
        
    }
    }


    //Change Product details
    const codevalue = async(code1) => 
    {
        code1 = ''+code1
        //console.log(typeof(code1));
        try {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            const response = await fetch("https://ten-camels-argue-103-51-24-90.loca.lt/findproducts", {
                method: "POST",
                body: JSON.stringify({ "productcode": code1 }),
                headers: headersList
            })
            const data = await response.json();
            //const msg = data.msg;
            setProductName(data.productname)
            setProductPrice(data.productprice)
            setQrCode(code1)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ margin: 0, backgroundColor: "#fff", width: "100%" }}>
                <View style={styles.navbar}>
                    <AntDesign name="arrowleft" size={24} color="black" style={{ padding: 10, }} />
                    <View style={styles.right_side}>
                        <FontAwesome name="search" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#6164e9" }} />
                        <TouchableOpacity onPress={()=>props.navigation.navigate("Home")} ><Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#6164e9" }} /></TouchableOpacity>
                        <FontAwesome name="user-circle-o" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#6164e9" }} />
                    </View>
                </View>
            </View>
            <View style={{marginTop:30,margin:10, height: 500, backgroundColor: 'powderblue'}}>
            <Camera
                onBarCodeScanned={(...args) => {
                    const data = args[0].data;
                    const result = JSON.stringify(data);
                    codevalue(data)
                    //console.log(result);
        }}
            barCodeScannerSettings={{
                barCodeTypes: ['qr'],
            }}
            style={{ flex: 1 }}
      />
            </View>
            <View>
                {/* <Text>This is {qrcode}</Text> */}
                <View style={styles.productitems}>
                    <View style={{ height: "100%", width: "100%", marginLeft: 10, flexDirection: "row" }}>
                        <View style={{ height: "100%", width: "30%" }}>
                        </View>
                        <View style={{ width: "80%", flexDirection: "column" }}>
                            <Text style={{ marginLeft: 30, width: "100%", fontSize: 20, marginTop: 20 }}>{productname}</Text>
                            <View style={{ width: 10, height: 10, marginTop: 20, margin: 10 }}>
                                <SelectDropdown

                                    data={quantity}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                        setProductWeight(selectedItem);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    defaultButtonText="250"
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
                                    <Text style={{ color: "green", fontSize: 20 }}></Text>
                                    <Text style={{ textAlign: "right", fontSize: 15 }}>{productprice == null ? console.log() : "₹"+productprice}</Text>
                                </View>
                                <View style={{ justifyContent: "center", alignItems: "flex-start", margin: 20, width: "100%" }}>
                                    <TouchableOpacity style={{ backgroundColor: "green", padding: 10, borderRadius: 5, width: 100, alignItems: "center" }} onPress={() => addproduct()}>
                                        <Text style={{ color: "white" }}><Feather name="shopping-cart" size={24} color="black" style={{ padding: 10, fontSize: 20, color: "#fff" }} />  ADD</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    navbar: {
        backgroundColor: "#fff",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        elevation: 15,
    },
    right_side: {
        flexDirection: "row",
    }  
});

export default QRScan;