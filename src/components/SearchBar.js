import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../screens/styles/ProductListStyles';

const phrases = [
  'Search services...',
  'Search salons...',
  'Search beauty products...',
];

const initialProducts = [
  {id: 1, title: 'Lotus Facial'},
  {id: 3, title: 'Trim'},
  {id: 4, title: 'Haircut with Blow Dry'},
  {id: 5, title: 'Straightening/Curls/Crimping'},
  {id: 6, title: 'Blow Dryer'},
  {id: 7, title: 'Loreal inoa root touch-up'},
  {id: 8, title: 'Global Hair Color'},
  {id: 9, title: 'Hair Straightening/ rebonding/smoothning'},
  {id: 10, title: 'Botox/keratin treatment'},
  {id: 11, title: 'Hair Cut only'},
  {id: 12, title: 'Hair Cut plus blow-dryer'},
  {id: 13, title: "Mom's and daughter hair cut"},
  {id: 14, title: "Mom's and daughter hair cut plus styling"},
  {id: 15, title: 'Hair trim'},
  {id: 16, title: 'Hair cut for kids plus dryer'},
  {id: 17, title: 'Hair cut plus loreal hair spa'},
  {id: 18, title: 'Hair cut plus root application'},
  {id: 19, title: 'Hair cut plus loreal Global colour'},
  {id: 20, title: 'Majirel root application plus trim'},
  {id: 21, title: 'Party makeup'},
  {id: 22, title: 'Party makeup plus styling'},
  {id: 23, title: 'Pre-wedding makeup'},
  {id: 24, title: 'Baby shower makeup'},
  {id: 25, title: 'Bridal makeup'},
  {id: 26, title: 'No makeup look'},
  {id: 27, title: 'Draping'},
  {id: 28, title: 'Engagement makeup'},
  {id: 29, title: 'Haldi makeup'},
  {id: 30, title: 'Reception makeup look'},
  {id: 31, title: 'Lotus Facial'},
  {id: 32, title: 'O3 Facial'},
  {id: 33, title: 'FYC Facial'},
  {id: 34, title: 'Hydration Facial'},
  {id: 35, title: 'Detan'},
  {id: 36, title: 'Tan Removal Cleanup'},
  {id: 37, title: 'Bleach'},
  {id: 38, title: 'Loreal Hair Spa'},
  {id: 39, title: 'Matrix Hair Spa'},
  {id: 40, title: 'Keratin Hair Spa'},
  {id: 41, title: 'Keratin Treatment'},
  {id: 42, title: 'Nano Plastia'},
  {id: 43, title: 'Straightening/Smoothing'},
  {id: 44, title: 'Botox'},
  {id: 45, title: 'Global hair color'},
  {id: 46, title: 'Global hair color plus highlights'},
  {id: 47, title: 'Loreal 15 signature highlights'},
  {id: 48, title: 'Loreal balayage highlights'},
  {id: 49, title: 'Loreal Majirel root application'},
  {id: 50, title: 'Loreal Inoa root application'},
  {id: 51, title: 'Schwarzkopf root application'},
  {id: 52, title: 'Schwarzkopf global hair color'},
  {id: 53, title: 'Hair Color root application only'},
  {id: 54, title: 'Hair color global application only'},
  {id: 55, title: 'Wedding hair styling (group of 3)'},
  {id: 56, title: 'Wedding hair styling (group of 4)'},
  {id: 57, title: 'Curls'},
  {id: 58, title: 'Straightening'},
  {id: 59, title: 'Straightening with Curls'},
  {id: 60, title: 'Open Hair Styling'},
  {id: 61, title: 'Bun'},
  {id: 62, title: 'Messy Bun'},
  {id: 63, title: 'Budget Bridal Makeup'},
  {id: 64, title: 'Standard Bridal Makeup'},
  {id: 65, title: 'Premium Bridal Makeup'},
  {id: 66, title: 'Luxury Bridal Makeup'},
  {id: 67, title: 'Loreal Hair mask'},
  {id: 68, title: 'Arabic Mehandi'},
  {id: 69, title: 'Traditional Mehandi'},
  {id: 70, title: 'Floral Mehandi'},
  {id: 71, title: 'Full Bridal Mehandi'},
  {id: 72, title: 'Half Bridal Mehandi'},
  {id: 73, title: 'Siders Mehandi'},
  {id: 74, title: 'Baby Shower Mehandi'},
  {id: 75, title: 'Karwa Chauth Mehandi'},
  {id: 76, title: 'Customized Mehandi'},
  {id: 82, title: 'Only Facial Massage'},
  {id: 83, title: 'Full body(Honey wax)'},
  {id: 84, title: 'Full Body (rica Wax)'},
  {id: 85, title: 'Half Body Waxing Combo (Honey Wax)'},
  {id: 86, title: 'Menicure'},
  {id: 87, title: 'Pedicure'},
  {id: 88, title: 'Half Body Waxing Combo (Oil Wax)'},
];

export const SearchBar = ({onSearchChange}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [productList, setProductList] = useState(initialProducts);
  const [suggestions, setSuggestions] = useState([]);

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

  const handleSearchChange = text => {
    const keyword = text.trim().toLowerCase();
    setSearchInput(text);

    if (keyword === '') {
      setSuggestions([]);
      return;
    }

    const filtered = productList.filter(product =>
      product.title.toLowerCase().includes(keyword),
    );

    // Only show suggestions if it's not an exact match (optional)
    if (filtered.length === 1 && filtered[0].title.toLowerCase() === keyword) {
      setSuggestions([]); // hide suggestion if exactly matched
    } else {
      setSuggestions(filtered);
    }

    onSearchChange && onSearchChange(text);
  };

  const handleSuggestionPress = title => {
    setSearchInput(title);
    setSuggestions([]);
    Keyboard.dismiss();

    setTimeout(() => {
      onSearchChange && onSearchChange(title);
    }, 100);
  };

  const handleLongPressToRemove = id => {
    Alert.alert(
      'Remove Suggestion',
      'Do you want to remove this item?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            const updatedList = productList.filter(item => item.id !== id);
            setProductList(updatedList);
            setSuggestions(prev => prev.filter(item => item.id !== id));
          },
        },
      ],
      {cancelable: true},
    );
  };

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
          value={searchInput}
          style={styles.searchInput}
          placeholderTextColor="#9CA3AF"
          onChangeText={handleSearchChange}
        />
      </View>

      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleSuggestionPress(item.title)}
              onLongPress={() => handleLongPressToRemove(item.id)}
              style={{
                padding: 10,
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
              }}>
              <Text style={{textTransform: 'uppercase'}}>{item.title}</Text>
            </TouchableOpacity>
          )}
          style={{
            maxHeight: 200,
            marginHorizontal: 10,
            borderRadius: 8,
            backgroundColor: '#fff',
            elevation: 3,
            marginTop: 4,
          }}
        />
      )}
    </View>
  );
};
