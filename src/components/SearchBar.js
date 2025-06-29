import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../screens/styles/HomeScreenStyles';

export const SearchBar = ({
  onSearchChange,
  placeholder = 'Search services, salons...',
}) => {
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
          placeholder={placeholder}
          style={styles.searchInput}
          placeholderTextColor="#9CA3AF"
          onChangeText={onSearchChange}
        />
      </View>
    </View>
  );
};
