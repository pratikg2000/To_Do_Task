// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({});

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

const categories = [
  {icon: 'dog', label: 'Beauty'},
  {icon: 'cog', label: 'Tech'},
  {icon: 'scissors-cutting', label: 'Craft'},
  {icon: 'hammer', label: 'Labor'},
  {icon: 'dots-horizontal', label: 'Other'},
];

const posts = [
  {
    id: '1',
    user: 'Kate K.',
    location: 'City, Country',
    image: require('../../assets/images/glowkart-logo.png'),
  },
  {
    id: '2',
    user: 'Full Name',
    location: 'City, Country',
    image: require('../../assets/images/glowkart-logo.png'),
  },
];

const HomeScreen = () => {
  const renderCategory = ({item}) => (
    <View style={styles.categoryItem}>
      <Icon name={item.icon} size={24} color="#000" />
      <Text style={styles.categoryLabel}>{item.label}</Text>
    </View>
  );

  const renderPost = ({item}) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={require('../../assets/images/glowkart-logo.png')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.userName}>{item.user}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
        <TouchableOpacity style={styles.seeMore}>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </View>
      <Image source={item.image} style={styles.postImage} resizeMode="cover" />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/glowkart-logo.png')}
          style={styles.avatarLarge}
        />
        <Text style={styles.welcomeText}>Welcome, Mia!</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="cog-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.label}
        contentContainerStyle={styles.categoryList}
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 80}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  welcomeText: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  iconButton: {
    padding: 8,
  },
  avatarLarge: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  categoryList: {
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  postContainer: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  userName: {
    fontWeight: '600',
  },
  location: {
    fontSize: 12,
    color: '#888',
  },
  seeMore: {
    marginLeft: 'auto',
  },
  seeMoreText: {
    color: '#5A55CA',
    fontWeight: '600',
  },
  postImage: {
    width: '100%',
    height: width * 0.6,
  },
});

export default HomeScreen;
