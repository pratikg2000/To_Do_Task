import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../screens/styles/ProductListStyles';

const phrases = [
  'Search services...',
  'Search salons...',
  'Search beauty products...',
];

export const SearchBar = ({onSearchChange}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (charIndex <= currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex));
        setCharIndex(prev => prev + 1);
      }, 100); // typing speed

      return () => clearTimeout(timeout);
    } else {
      // Pause before moving to next phrase
      const pause = setTimeout(() => {
        setCharIndex(0);
        setPhraseIndex(prev => (prev + 1) % phrases.length);
      }, 2000); // pause between phrases

      return () => clearTimeout(pause);
    }
  }, [charIndex, phraseIndex]);

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Icon
          name="search"
          size={20}
          color="#9CA3AF"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder={displayedText}
          style={styles.searchInput}
          placeholderTextColor="#9CA3AF"
          onChangeText={onSearchChange}
        />
      </View>
    </View>
  );
};
