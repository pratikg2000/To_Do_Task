import {useEffect, useState, useCallback} from 'react';
import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setCategories} from '../../redux/categorySlice';
import {setCategoryProducts} from '../../redux/categoryProductsSlice';
import {Imp} from '../../BasicImp';
import {LoadingSkeleton} from '../../components/LoadingSkeleton';
import {SearchBar} from '../../components/SearchBar';
import {CategoryTabs} from '../../components/CategoryTabs';
import {ProductCard} from '../../components/ProductCard';
import {styles} from '../styles/ProductListStyles';

const ProductList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const categories = useSelector(state => state.category.categories);
  const [loading, setLoading] = useState(true);
  const [groupedProducts, setGroupedProducts] = useState({});
  const [filteredGroupedProducts, setFilteredGroupedProducts] = useState({});
  const [activeTab, setActiveTab] = useState('All'); // Set "All" as active by default
  const [searchText, setSearchText] = useState('');

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const fullUrl = `${Imp.Constant.HOME_MOBILE_PRODUCTS}`;
      Imp.Util.call_Get_by_URI(
        fullUrl,
        (response, success) => {
          if (!success) {
            console.error('Failed to fetch data');
            setLoading(false);
            return;
          }
          const categoryList = response?.categories || [];
          const productList = response?.products || [];
          dispatch(setCategories(categoryList));

          const groupedByCategoryId = {};
          const groupedByCategoryName = {};

          productList.forEach(product => {
            const categoryId = product.category_id;
            const categoryName = product.category;
            if (categoryId) {
              if (!groupedByCategoryId[categoryId])
                groupedByCategoryId[categoryId] = [];
              groupedByCategoryId[categoryId].push(product);
            }
            if (categoryName) {
              if (!groupedByCategoryName[categoryName])
                groupedByCategoryName[categoryName] = [];
              groupedByCategoryName[categoryName].push(product);
            }
          });

          Object.entries(groupedByCategoryId).forEach(
            ([categoryId, products]) => {
              dispatch(setCategoryProducts({categoryId, products}));
            },
          );

          const chunkedProducts = {};
          Object.entries(groupedByCategoryName).forEach(
            ([categoryName, products]) => {
              chunkedProducts[categoryName] = [products]; // Store all products
            },
          );

          setGroupedProducts(chunkedProducts);
          setFilteredGroupedProducts(chunkedProducts);
          setLoading(false);
        },
        dispatch,
      );
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleSearchChange = useCallback(
    text => {
      setSearchText(text);
      if (text === '') {
        if (activeTab === 'All' || !activeTab) {
          setFilteredGroupedProducts(groupedProducts);
        } else {
          setFilteredGroupedProducts({
            [activeTab]: groupedProducts[activeTab],
          });
        }
        return;
      }

      const lowerText = text.toLowerCase();

      if (activeTab === 'All' || !activeTab) {
        // Search in all categories
        const newFilteredGroup = {};
        Object.entries(groupedProducts).forEach(([category, productsArray]) => {
          const filteredItems = productsArray[0].filter(product =>
            product.title?.toLowerCase().includes(lowerText),
          );
          if (filteredItems.length > 0)
            newFilteredGroup[category] = [filteredItems];
        });
        setFilteredGroupedProducts(newFilteredGroup);
      } else {
        // Search in specific category
        const categoryProducts = groupedProducts[activeTab]?.[0] || [];
        const filteredItems = categoryProducts.filter(product =>
          product.title?.toLowerCase().includes(lowerText),
        );
        setFilteredGroupedProducts({
          [activeTab]: [filteredItems],
        });
      }
    },
    [groupedProducts, activeTab],
  );

  const handleTabPress = useCallback(
    categoryName => {
      setActiveTab(categoryName);
      setSearchText(''); // Clear search when changing tabs

      if (!categoryName || categoryName === 'All') {
        // Show all categories when "All" is selected
        setFilteredGroupedProducts(groupedProducts);
        return;
      }
      if (groupedProducts[categoryName]) {
        // Show only selected category
        setFilteredGroupedProducts({
          [categoryName]: groupedProducts[categoryName],
        });
      }
    },
    [groupedProducts],
  );

  const handleProductPress = useCallback(
    product => {
      navigation.navigate('ProductDetail', {product});
    },
    [navigation],
  );

  const handleCategoryPress = useCallback(
    (categoryId, categoryName) => {
      navigation.navigate('CategoryProductsScreen', {categoryId, categoryName});
    },
    [navigation],
  );

  // Check if we're showing a specific category (vertical layout)
  const isShowingSpecificCategory =
    activeTab &&
    activeTab !== 'All' &&
    Object.keys(filteredGroupedProducts).length === 1;

  const renderCategorySection = category => {
    const categoryName = category.name;
    const allProducts = filteredGroupedProducts[categoryName]?.[0] || [];
    if (allProducts.length === 0) return null;

    // If showing specific category, render all products vertically
    if (isShowingSpecificCategory && activeTab === categoryName) {
      return (
        <View key={category.id} style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{categoryName}</Text>
            {/* <TouchableOpacity
              onPress={() => handleCategoryPress(category.id, category.name)}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity> */}
          </View>
          <FlatList
            key={`${category.id}-vertical`}
            data={allProducts}
            renderItem={({item}) => (
              <ProductCard product={item} onPress={handleProductPress} />
            )}
            keyExtractor={(item, index) =>
              item?.id?.toString?.() || `item-${index}`
            }
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false} // Disable scroll since it's inside ScrollView
          />
        </View>
      );
    }

    // Default horizontal layout for showing all categories
    return (
      <View key={category.id} style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{categoryName}</Text>
          {/* <TouchableOpacity
            onPress={() => handleCategoryPress(category.id, category.name)}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity> */}
        </View>
        <FlatList
          key={`${category.id}-horizontal`}
          data={allProducts}
          renderItem={({item}) => (
            <ProductCard product={item} onPress={handleProductPress} />
          )}
          keyExtractor={(item, index) =>
            item?.id?.toString?.() || `item-${index}`
          }
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  if (loading) return <LoadingSkeleton />;

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <SearchBar onSearchChange={handleSearchChange} />
      </View>
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 100}}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          {/* CategoryTabs with activeTab set to "All" by default */}
          <CategoryTabs
            categories={categories}
            activeTab={activeTab}
            onTabPress={handleTabPress}
          />

          {/* Render category sections */}
          {categories.map(renderCategorySection)}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductList;
