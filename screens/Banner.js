import React from "react";
import { View, Image, Text, ScrollView, Dimensions } from "react-native";

const Banner = () => {
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100; // 60%

  const images = [
    {
      url: "https://image.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg",
    },
    {
      url: "https://image.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg",
    },
    {
      url: "https://image.freepik.com/free-psd/sale-promotion-banner-template_23-2148718617.jpg",
    },
  ];

  return (
    <View style={(width, height)}>
      <ScrollView pagingEnabled horizontal style={(width, height)}>
        {images.map((img, index) => {
          return (
            <Image
              key={index}
              style={{
                height: 200,
                width,
                marginTop:10,
                alignItems: "center",
                resizeMode: "contain",
              }}
              source={{ uri: img.url }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Banner;
