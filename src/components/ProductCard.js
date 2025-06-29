import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from '../screens/styles/HomeScreenStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const ProductCard = ({
  product,
  onPress,
  imageBaseUrl = 'https://stylingwithmuskan.com/uploads/images/products/',
}) => {
  const hasDiscount =
    product.discountPrice && product.price !== product.discountPrice;

  const imageUri = `${imageBaseUrl}${product.image}`;

  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => onPress(product)}
      activeOpacity={0.8}>
      <FastImage
        style={styles.productImage}
        source={{
          uri: imageUri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.productTitle} numberOfLines={1}>
        {product.title}
      </Text>
      <Text style={styles.productDescription} numberOfLines={2}>
        {product.description}
      </Text>
      <View style={styles.servicesTime}>
        <FontAwesome5
          name="stopwatch"
          size={20}
          color="black"
          style={{marginRight: 10}}
        />
        <Text style={styles.serviceText}>{product.serviceTime} Min</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.productPrice}>
          ₹{Math.floor(product.discountPrice)}
        </Text>

        {hasDiscount && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 8,
            }}>
            <Text style={styles.originalPrice}>₹{product.price}</Text>
          </View>
        )}
        {hasDiscount && (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'green',
              marginRight: 10,
              padding: 3,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <MaterialIcons name="discount" size={18} color="white" />
            <Text style={{color: 'white'}}>{product.discount}% Off</Text>
          </View>
        )}
      </View>

      {/* <Text style={styles.productPrice}>
        ₹{Math.floor(product.discountPrice)}
      </Text> */}
      {/* <View>
        <Text>Add</Text>
      </View> */}
    </TouchableOpacity>
  );
};
