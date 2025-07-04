import {StyleSheet, Dimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

// Responsive breakpoints
const isSmallDevice = width < 375;
const isMediumDevice = width >= 375 && width < 414;
const isLargeDevice = width >= 414;

// Dynamic calculations
const getProductCardWidth = () => {
  if (isSmallDevice) {
    return (width - scale(48)) / 2; // More padding for small devices
  } else if (isMediumDevice) {
    return (width - scale(54)) / 2;
  } else {
    return (width - scale(60)) / 2; // More space for large devices
  }
};

const getHeaderHeight = () => {
  return height > 800 ? verticalScale(160) : verticalScale(140);
};

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
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
    elevation: 3,
  },

  searchIcon: {
    marginRight: scale(10),
  },

  searchInput: {
    flex: 1,
    fontSize: moderateScale(16),
    color: '#374151',
    paddingVertical: verticalScale(8),
  },

  categoryTabsContainer: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F3F4F6',
  },

  categoryTab: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    marginRight: scale(8),
    borderRadius: scale(20),
    backgroundColor: '#F9FAFB',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E7EB',
    minHeight: verticalScale(36),
    justifyContent: 'center',
  },

  activeCategoryTab: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },

  categoryTabText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: '#6B7280',
    textAlign: 'center',
  },

  activeCategoryTabText: {
    color: '#FFFFFF',
  },

  sectionContainer: {
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
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
    flex: 1,
  },

  seeAllText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#8B5CF6',
    paddingLeft: scale(8),
  },

  specialOfferCard: {
    flexDirection: 'row',
    backgroundColor: '#8B5CF6',
    borderRadius: scale(16),
    padding: scale(16),
    width: width - scale(32),
    marginRight: scale(16),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: verticalScale(4)},
    shadowOpacity: 0.15,
    shadowRadius: scale(8),
    elevation: 5,
    minHeight: verticalScale(120),
  },

  specialOfferContent: {
    flex: 1,
    justifyContent: 'space-between',
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
    lineHeight: moderateScale(22),
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
    justifyContent: 'space-between',
  },

  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(12),
    marginRight: scale(10),
    padding: scale(8),
    marginBottom: verticalScale(12),
    width: getProductCardWidth(),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
    elevation: 3,
    minHeight: verticalScale(200),
  },

  productImage: {
    width: '100%',
    height: verticalScale(120),
    borderRadius: scale(8),
    marginBottom: verticalScale(8),
    resizeMode: 'cover',
  },

  productTitle: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: verticalScale(4),
    lineHeight: moderateScale(18),
    numberOfLines: 2,
  },

  productDescription: {
    fontSize: moderateScale(12),
    color: '#6B7280',
    marginBottom: verticalScale(4),
    lineHeight: moderateScale(16),
    numberOfLines: 2,
  },

  productPrice: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#22252C',
  },

  originalPrice: {
    fontSize: moderateScale(14),
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
    // marginLeft: scale(4),
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
    paddingVertical: verticalScale(8),
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
    marginTop: verticalScale(10),
    marginHorizontal: scale(20),
    paddingVertical: verticalScale(8),
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },

  userName: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: scale(10),
    flex: 1,
  },

  locationIcon: {
    width: scale(22),
    height: scale(22),
    tintColor: '#374151',
  },

  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#FADACD',
    borderBottomLeftRadius: scale(30),
    borderBottomRightRadius: scale(30),
    paddingTop: verticalScale(10),
    // minHeight: getHeaderHeight(),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
    // elevation: 5,
  },

  servicesTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  serviceText: {
    fontSize: moderateScale(14),
    color: '#000000',
    marginBottom: verticalScale(4),
    lineHeight: moderateScale(18),
  },

  // Additional responsive styles
  horizontalProductCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(12),
    padding: scale(8),
    marginRight: scale(8),
    width: scale(140),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
    elevation: 3,
    minHeight: verticalScale(180),
  },

  verticalProductCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(12),
    padding: scale(8),
    marginBottom: verticalScale(12),
    width: getProductCardWidth(),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
    elevation: 3,
    minHeight: verticalScale(200),
  },

  // Loading skeleton styles
  skeletonContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: scale(8),
  },

  // Empty state styles
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(40),
  },

  emptyStateText: {
    fontSize: moderateScale(16),
    color: '#6B7280',
    textAlign: 'center',
    marginTop: verticalScale(16),
  },
});

// Export responsive utilities
export const responsiveUtils = {
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  getProductCardWidth,
  getHeaderHeight,
  screenWidth: width,
  screenHeight: height,
};
