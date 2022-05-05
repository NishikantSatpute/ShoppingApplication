import React, { useState, state, useEffect } from 'react'; 
import { View, Modal, Alert,Pressable,Text,ScrollView, Button, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Constant from "expo-constants";
import ViewCartDetail from "./ViewCartDetail";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';



export const HomeScreen = (props) => {
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

export const ViewCartHeader = (props) => {
  
  const [data,setData] = useState(null);
  const [paybill,setPaybill] = useState("Pay");
  const [modalVisible, setModalVisible] = useState(false);

  const bill = AsyncStorage.getItem('bill')


  let alldata = [];

    const sendBill = async() =>{
      await AsyncStorage.setItem('bill', "paid");
      setPaybill("Sucess")
    }
  
    const finddata = async() => { 
      const email = await AsyncStorage.getItem('email')
        try
        {
          let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
          }
          
          const response = await fetch("https://silly-eyes-run-103-51-24-90.loca.lt/finddata", {
            method: "POST",
            body: JSON.stringify({ "email": email}),
            headers: headersList
          })
          const data = await response.json();
          console.log(data)
          if(data.msg == "Found")
          {
              setData(true)
          }
          if(data.msg == "Nothing")
          {
              setData(false)
          }
        }
        catch(err)
        {
          console.log(err)
        }
    }
    finddata()
  let totalprice = 0, totalweight = 0;
    let ab=1;
    if(data==true)
    {
          
          const createbill = async() =>{
          const email = await AsyncStorage.getItem('email')
          let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
          }

            const response = await fetch("https://silly-eyes-run-103-51-24-90.loca.lt/sendbill", {
            method: "POST",
            body: JSON.stringify({ "email": email }),
            headers: headersList
          })
          const data = await response.json();
          let data1 = data.billdata;
          //console.log(data1[0].productname)
          let productname = [], productweight=[],productprice=[];
            for (let i = 0; i < data1.length;i++)
            {
              productname.push(data1[i].productname)
              productweight.push(data1[i].productweight)
              productprice.push(data1[i].productprice)
              totalprice = totalprice + data1[i].productprice
              totalweight = totalweight + data1[i].productweight
            }
            for (let i = 0; i < data1.length; i++) {
                alldata.push([productname[i],productweight[i],productprice[i]])
            }
            return alldata;
            //console.log(alldata)
        }
        //ab = createbill().then((data)=>{console.log(data)})
        // console.log(ab)
    }
    console.log(ab)
  let CONTENT = {
    tableHead: ['', 'Product name', 'Product Quantity', 'Product Price'],
    tableTitle: ['', '', '', '', 'Total'],
    tableData: [
      ['Chana dal', '1000', 100],
      ['Rajma', '500', 70],
      ['Jeera', '250', 100],
      ['Rice', '250', 50],
      [' ', '2000', '320'],
    ],
  };
  //console.log(alldata)

  return (
    <View>
      {
          data == null ?
          (
            <>
              <View><Text>Hello</Text></View>
            </>
          )
          : data == true ?
            (
              <>
                <View>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>Payment</Text>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => sendBill() }
                        >
                          <Text style={styles.textStyle}>Sucess</Text>
                        </Pressable>
                        <Pressable
                          style={[styles.button, styles.buttonClose1]}
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                          <Text style={styles.textStyle}>   Fail   </Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
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
                      <TouchableOpacity onPress={() => props.navigation.navigate("QRScan")}><AntDesign name="qrcode" size={24} color="black" /></TouchableOpacity>
                      <AntDesign name="adduser" size={24} color="black" />
                    </View>
                  </View>
                </View>
                <View horizontal={true} style={{ width: "100%"}}>
                  <Table borderStyle={{ borderWidth: 1 }}>
                    <Row
                      data={CONTENT.tableHead}
                      flexArr={[1, 1, 1, 1]}
                      style={styles.head}
                      textStyle={styles.text}
                    />
                    <TableWrapper style={styles.wrapper}>
                      <Col
                        data={CONTENT.tableTitle}
                        style={styles.title}
                        heightArr={[28, 28]}
                        textStyle={styles.text}
                      />
                      <Rows
                        data={CONTENT.tableData}
                        flexArr={[1,2, 1]}
                        style={styles.row}
                        textStyle={styles.text}
                      />
                    </TableWrapper>
                  </Table>
                </View>
                <View>
                    {bill == "paid"&&paybill=="Success" ? <Text style={styles.btn1}>{paybill}</Text> : <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}><Text style={styles.btn1}>{paybill}</Text></TouchableOpacity>}
                </View>
                </View>
              </>
            )
            :
            (
              <>
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
                      <TouchableOpacity onPress={() => props.navigation.navigate("QRScan")}><AntDesign name="qrcode" size={24} color="black" /></TouchableOpacity>
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
                </View>
              </>
            )
      }
    </View>
    );
};

const bill = () => {
  return(
    <View horizontal={true} style={{ width: "100%" }}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 1, 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={styles.text}
          />
          <Rows
            data={CONTENT.tableData}
            flexArr={[1, 2, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  )
}



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
  },
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: { textAlign: 'center' },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin:10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#4BB543",
  },
  buttonClose1: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
