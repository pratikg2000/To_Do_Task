import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {SkeletonLoader} from './SkeletonLoader';
import {styles} from '../screens/styles/ProductListStyles';

const {width} = Dimensions.get('window');

const SearchBarSkeleton = () => (
  <View style={styles.searchContainer}>
    <SkeletonLoader width={width - 32} height={45} borderRadius={25} />
  </View>
);

const CategoryTabsSkeleton = () => (
  <View style={styles.categoryTabsContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[1, 2, 3, 4, 5].map(item => (
        <SkeletonLoader
          key={item}
          width={80}
          height={35}
          borderRadius={20}
          style={{marginRight: 10}}
        />
      ))}
    </ScrollView>
  </View>
);

const ProductCardSkeleton = () => (
  <View style={styles.productCard}>
    <SkeletonLoader
      width="100%"
      height={100}
      borderRadius={10}
      style={{marginBottom: 8}}
    />
    <SkeletonLoader
      width="80%"
      height={12}
      borderRadius={6}
      style={{marginBottom: 5}}
    />
    <SkeletonLoader width="60%" height={10} borderRadius={5} />
  </View>
);

export const LoadingSkeleton = () => (
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <SearchBarSkeleton />
    <CategoryTabsSkeleton />

    {/* Special Offer Skeleton */}
    <View style={styles.sectionContainer}>
      <SkeletonLoader width={width - 32} height={120} borderRadius={15} />
    </View>

    {/* Categories Skeleton */}
    {[1, 2, 3].map(section => (
      <View key={section} style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <SkeletonLoader width={100} height={20} borderRadius={10} />
          <SkeletonLoader width={50} height={16} borderRadius={8} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productGroup}>
            {[1, 2, 3, 4].map(item => (
              <ProductCardSkeleton key={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    ))}
  </ScrollView>
);
