import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {styles} from '../screens/styles/ProductListStyles';

export const CategoryTabs = ({categories, activeTab, onTabPress}) => {
  const modifiedCategories = [{id: 'all', name: 'All'}, ...categories];

  return (
    <View style={styles.categoryTabsContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {modifiedCategories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryTab,
              activeTab === category.name && styles.activeCategoryTab,
            ]}
            onPress={() => onTabPress(category.name)}>
            <Text
              style={[
                styles.categoryTabText,
                activeTab === category.name && styles.activeCategoryTabText,
              ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
