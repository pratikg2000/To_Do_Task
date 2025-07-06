import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles/ProductDetailsStyles';

const ProductDetailsScreen = ({route}) => {
  const {product} = route.params;
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const maxChars = 90;
  const description = product.description?.trim() || '';
  const isLongText = description.length > maxChars;
  const shortText = description.slice(0, maxChars).trim();

  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <ScrollView style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: `https://stylingwithmuskan.com/uploads/images/products/${product.image}`,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>

        <Text style={styles.description}>
          {isExpanded || !isLongText ? description : `${shortText}... `}
          {isLongText && (
            <Text
              style={styles.toggleText}
              onPress={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? '  See less' : '  See more'}
            </Text>
          )}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{product?.price}</Text>
          {product.discountPrice ? (
            <View style={styles.discountBadge}>
              <MaterialIcons name="discount" size={18} color="white" />
              <Text style={styles.discountText}>{product.discount}% Off</Text>
            </View>
          ) : null}
        </View>

        {product.discountPrice ? (
          <Text style={styles.discountedPrice}>₹{product.discountPrice}</Text>
        ) : null}

        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>
            Service Time: {product.serviceTime} min
          </Text>
          <Text style={styles.metaText}>Stock: {product.stock}</Text>
          <Text style={styles.metaText}>Available On: {product.date}</Text>
          <Text style={styles.metaText}>Time: {product.time}</Text>
        </View>

        {quantity === 0 ? (
          <TouchableOpacity activeOpacity={0.9} onPress={incrementQty}>
            <LinearGradient
              colors={['#6a11cb', '#2575fc']}
              style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={decrementQty}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity
              style={styles.quantityButton}
              onPress={incrementQty}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ProductDetailsScreen;
