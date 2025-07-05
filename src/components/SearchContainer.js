// components/SearchContainer.js
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../screens/styles/ProductListStyles';

const phrases = [
  'Search services...',
  'Search salons...',
  'Search beauty products...',
];

export const SearchContainer = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (charIndex <= currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex));
        setCharIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setPhraseIndex(prev => (prev + 1) % phrases.length);
      }, 2000);

      return () => clearTimeout(pause);
    }
  }, [charIndex, phraseIndex]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductList')}
      style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Icon
          name="search"
          size={20}
          color="#9CA3AF"
          style={styles.searchIcon}
        />
        <Text style={styles.searchInput} numberOfLines={1}>
          {displayedText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
