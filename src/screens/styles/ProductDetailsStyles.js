// ProductDetails/ProductDetailsStyles.js
import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: verticalScale(300),
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
  },
  content: {
    padding: scale(16),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: '#333',
  },
  category: {
    fontSize: moderateScale(16),
    color: '#777',
    marginBottom: verticalScale(10),
  },
  description: {
    fontSize: moderateScale(15),
    color: '#555',
    lineHeight: verticalScale(22),
    marginBottom: verticalScale(8),
  },
  toggleText: {
    fontSize: moderateScale(15),
    color: '#6a11cb',
    fontWeight: '600',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  price: {
    fontSize: moderateScale(16),
    color: '#999',
    textDecorationLine: 'line-through',
  },
  discountBadge: {
    flexDirection: 'row',
    backgroundColor: 'green',
    marginLeft: scale(10),
    padding: scale(4),
    borderRadius: scale(5),
    alignItems: 'center',
  },
  discountText: {
    color: 'white',
    marginLeft: scale(4),
    fontSize: moderateScale(14),
  },
  discountedPrice: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    color: '#4caf50',
    marginTop: verticalScale(5),
    marginBottom: verticalScale(15),
  },
  metaContainer: {
    marginBottom: verticalScale(20),
  },
  metaText: {
    fontSize: moderateScale(14),
    color: '#555',
    marginBottom: verticalScale(5),
  },
  button: {
    paddingVertical: verticalScale(13),
    borderRadius: scale(30),
    alignItems: 'center',
    marginTop: verticalScale(10),
    elevation: 3,
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: '#fff',
    fontWeight: '600',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
    backgroundColor: '#f1f1f1',
    borderRadius: scale(25),
    padding: scale(10),
  },
  quantityButton: {
    paddingHorizontal: scale(10),
  },
  quantityText: {
    fontSize: moderateScale(16),
    marginHorizontal: scale(10),
    fontWeight: '600',
  },
});
