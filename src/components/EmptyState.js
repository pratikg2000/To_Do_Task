import {View, Text, StyleSheet} from 'react-native';

export default function EmptyState({
  title = 'No items',
  subtitle = 'Add your first one!',
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingVertical: 24, alignItems: 'center'},
  title: {fontSize: 16, fontWeight: '700', color: 'black'},
  subtitle: {marginTop: 6, fontSize: 14, color: 'grey'},
});
