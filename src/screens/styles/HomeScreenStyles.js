import {StyleSheet, Dimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADACD',
    position: 'relative',
  },
  searchContainer: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(16),
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: scale(25),
    paddingHorizontal: scale(16),
    height: verticalScale(45),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: scale(10),
  },
  searchInput: {
    flex: 1,
    fontSize: moderateScale(16),
    color: '#374151',
  },
  categoryTabsContainer: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
    // backgroundColor: '#FADACD',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  categoryTab: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    marginRight: scale(8),
    borderRadius: scale(20),
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activeCategoryTab: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  categoryTabText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: '#6B7280',
  },
  activeCategoryTabText: {
    color: '#FFFFFF',
  },
  sectionContainer: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(16),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#1F2937',
  },
  seeAllText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#8B5CF6',
  },
  specialOfferCard: {
    flexDirection: 'row',
    backgroundColor: '#8B5CF6',
    borderRadius: scale(16),
    padding: scale(16),
    width: width - scale(32),
    marginRight: scale(16),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  specialOfferContent: {
    flex: 1,
  },
  discountBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(12),
    alignSelf: 'flex-start',
    marginBottom: verticalScale(8),
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  specialOfferTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: verticalScale(4),
  },
  specialOfferPeriod: {
    fontSize: moderateScale(14),
    color: '#E9D5FF',
    marginBottom: verticalScale(12),
  },
  getOfferButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    borderRadius: scale(20),
    alignSelf: 'flex-start',
  },
  getOfferText: {
    color: '#8B5CF6',
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
  specialOfferImage: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(12),
    marginLeft: scale(16),
  },
  productGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width - scale(32),
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(12),
    padding: scale(8),
    margin: scale(4),
    width: (width - scale(32)) / 1.5,
    // width: (width - scale(16)) / 1.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: verticalScale(180),
    borderRadius: scale(8),
    marginBottom: verticalScale(8),
  },
  productTitle: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: verticalScale(4),
  },
  productDescription: {
    fontSize: moderateScale(14),
    // fontWeight: 'bold',
    color: 'grey',
    marginBottom: verticalScale(4),
  },
  productPrice: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '22252C',
  },
  originalPrice: {
    fontSize: moderateScale(14),
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: verticalScale(8),
  },
  paginationDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    marginHorizontal: scale(4),
  },
  activeDot: {
    backgroundColor: '#8B5CF6',
  },
  inactiveDot: {
    backgroundColor: '#D1D5DB',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 20,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 10,
  },

  locationIcon: {
    width: 22,
    height: 22,
    tintColor: '#374151',
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    // backgroundColor: 'white',
    backgroundColor: '#FADACD',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // paddingBottom: 16,
    paddingTop: 10,
  },
  servicesTime: {
    flexDirection: 'row',
  },
  serviceText: {
    fontSize: moderateScale(14),
    // fontWeight: 'bold',
    color: 'black',
    marginBottom: verticalScale(4),
  },
});
