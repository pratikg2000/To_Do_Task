import {useRef, useEffect, useCallback} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {styles} from '../screens/styles/ProductListStyles';

const {width} = Dimensions.get('window');

export const SpecialOffersCarousel = ({
  offers,
  currentIndex,
  onIndexChange,
}) => {
  const flatListRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    if (offers.length <= 1) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % offers.length;
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      onIndexChange(nextIndex);
    }, 3000); // Changed to 3 seconds for better UX

    return () => clearInterval(interval);
  }, [currentIndex, offers.length, onIndexChange]);

  const renderSpecialOffer = useCallback(
    ({item}) => (
      <View style={styles.specialOfferCard}>
        <View style={styles.specialOfferContent}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>
          <Text style={styles.specialOfferTitle}>{item.title}</Text>
          <Text style={styles.specialOfferPeriod}>{item.period}</Text>
          <TouchableOpacity style={styles.getOfferButton}>
            <Text style={styles.getOfferText}>Get Offer Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={{uri: item.image}} style={styles.specialOfferImage} />
      </View>
    ),
    [],
  );

  const handleMomentumScrollEnd = useCallback(
    event => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const pageWidth = width - 32;
      const newIndex = Math.round(contentOffsetX / pageWidth);
      onIndexChange(newIndex);
    },
    [onIndexChange],
  );

  const renderPaginationDots = () => {
    if (offers.length <= 1) return null;

    return (
      <View style={styles.paginationDotsContainer}>
        {offers.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        ref={flatListRef}
        data={offers}
        renderItem={renderSpecialOffer}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleMomentumScrollEnd}
        getItemLayout={(_, index) => ({
          length: width - 32,
          offset: (width - 32) * index,
          index,
        })}
      />
      {renderPaginationDots()}
    </View>
  );
};
