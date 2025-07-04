import {useEffect, useState, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {setCategories} from '../../redux/categorySlice';
import {setCategoryProducts} from '../../redux/categoryProductsSlice';
import {Imp} from '../../BasicImp';

import {LoadingSkeleton} from '../../components/LoadingSkeleton';
import {SearchBar} from '../../components/SearchBar';
import {CategoryTabs} from '../../components/CategoryTabs';
import {SpecialOffersCarousel} from '../../components/SpecialOffersCarousel';
import {ProductCard} from '../../components/ProductCard';
import {styles} from '../styles/HomeScreenStyles';

const SPECIAL_OFFERS = [
  {
    id: 1,
    title: 'Summer Glow Package',
    discount: '30% OFF',
    period: 'Valid till Aug 31',
    image:
      'https://via.placeholder.com/200x120/8B5CF6/FFFFFF?text=Special+Offer+1',
  },
  {
    id: 2,
    title: 'Winter Refresh Deal',
    discount: '20% OFF',
    period: 'Valid till Dec 31',
    image:
      'https://via.placeholder.com/200x120/FF6347/FFFFFF?text=Special+Offer+2',
  },
  {
    id: 3,
    title: 'Spring Beauty Blast',
    discount: '25% OFF',
    period: 'Valid till May 31',
    image:
      'https://via.placeholder.com/200x120/3CB371/FFFFFF?text=Special+Offer+3',
  },
  {
    id: 4,
    title: 'Monsoon Magic',
    discount: '15% OFF',
    period: 'Valid till Sep 15',
    image:
      'https://via.placeholder.com/200x120/6A5ACD/FFFFFF?text=Special+Offer+4',
  },
];

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const categories = useSelector(state => state.category.categories);

  const [loading, setLoading] = useState(true);
  const [groupedProducts, setGroupedProducts] = useState({});
  const [filteredGroupedProducts, setFilteredGroupedProducts] = useState({});
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [filteredTrendingProducts, setFilteredTrendingProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [searchText, setSearchText] = useState('');
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const specialOffers = useMemo(() => SPECIAL_OFFERS, []);

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
              chunkedProducts[categoryName] = [products.slice(0, 4)];
            },
          );

          const trending = productList.slice(0, 10);

          setGroupedProducts(chunkedProducts);
          setFilteredGroupedProducts(chunkedProducts);
          setTrendingProducts(trending);
          setFilteredTrendingProducts(trending);
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

  // const handleSearchChange = useCallback(
  //   text => {
  //     setSearchText(text);
  //     if (text === '') {
  //       setFilteredTrendingProducts(trendingProducts);
  //       setFilteredGroupedProducts(groupedProducts);
  //       return;
  //     }
  //     const lowerText = text.toLowerCase();
  //     const filteredTrending = trendingProducts.filter(product =>
  //       product.title?.toLowerCase().includes(lowerText),
  //     );
  //     const newFilteredGroup = {};
  //     Object.entries(groupedProducts).forEach(([category, productsArray]) => {
  //       const filteredItems = productsArray[0].filter(product =>
  //         product.title?.toLowerCase().includes(lowerText),
  //       );
  //       if (filteredItems.length > 0)
  //         newFilteredGroup[category] = [filteredItems];
  //     });
  //     setFilteredTrendingProducts(filteredTrending);
  //     setFilteredGroupedProducts(newFilteredGroup);
  //   },
  //   [trendingProducts, groupedProducts],
  // );

  const handleSearchChange = () => {
    navigation.navigate('ProductList');
  };

  const handleTabPress = useCallback(
    categoryName => {
      setActiveTab(categoryName);
      if (!categoryName || !groupedProducts[categoryName]) {
        setFilteredGroupedProducts(groupedProducts);
        return;
      }
      setFilteredGroupedProducts({
        [categoryName]: groupedProducts[categoryName],
      });
    },
    [groupedProducts],
  );

  const handleOfferIndexChange = useCallback(index => {
    setCurrentOfferIndex(index);
  }, []);

  const handleProductPress = useCallback(
    product => {
      navigation.navigate('ProductDetail', {product});
    },
    [navigation],
  );

  const handleCategoryPress = useCallback(
    (categoryId, categoryName) => {
      navigation.navigate('ProductList', {categoryId, categoryName});
    },
    [navigation],
  );

  const renderCategorySection = category => {
    const categoryName = category.name;
    const allProducts = filteredGroupedProducts[categoryName]?.[0] || [];
    if (allProducts.length === 0) return null;
    return (
      <View key={category.id} style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{categoryName}</Text>
          <TouchableOpacity
            onPress={() => handleCategoryPress(category.id, category.name)}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={
            allProducts.length > 4
              ? [...allProducts.slice(0, 4), {isSeeMore: true}]
              : allProducts
          }
          renderItem={({item}) =>
            item.isSeeMore ? (
              <TouchableOpacity
                style={{
                  height: 160,
                  width: 140,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 5,
                  borderRadius: 10,
                  elevation: 2,
                }}
                onPress={() => handleCategoryPress(category.id, category.name)}>
                <Text style={{fontSize: 20, color: '#8B5CF6'}}>+ See More</Text>
              </TouchableOpacity>
            ) : (
              <ProductCard product={item} onPress={handleProductPress} />
            )
          }
          keyExtractor={(item, index) =>
            item?.id?.toString?.() || `item-${index}`
          }
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderTrendingProduct = useCallback(
    ({item}) => <ProductCard product={item} onPress={handleProductPress} />,
    [handleProductPress],
  );

  if (loading) return <LoadingSkeleton />;

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <View style={styles.headerContent}>
          <View style={styles.userInfo}>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}}
              style={styles.avatar}
            />
            <Text style={styles.userName}>Mia</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
              }}
              style={styles.locationIcon}
            />
          </TouchableOpacity>
        </View>
        <SearchBar onSearchChange={handleSearchChange} />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 150}}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <CategoryTabs
            categories={categories}
            activeTab={activeTab}
            onTabPress={handleTabPress}
          />
          <SpecialOffersCarousel
            offers={specialOffers}
            currentIndex={currentOfferIndex}
            onIndexChange={handleOfferIndexChange}
          />

          {filteredTrendingProducts.length > 0 && (
            <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Trending Services</Text>
                <TouchableOpacity
                  onPress={() => handleCategoryPress(null, 'All Products')}>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={filteredTrendingProducts}
                renderItem={renderTrendingProduct}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}

          {/* {categories.map(renderCategorySection)} */}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
