import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function TaskCard({task, onToggle, onDelete, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.card}>
      <View style={styles.headerRow}>
        <View
          style={[
            styles.statusDot,
            {backgroundColor: task.completed ? 'green' : 'yellow'},
          ]}
        />
        <Text style={styles.title} numberOfLines={1}>
          {task.title}
        </Text>
      </View>
      {task.description ? (
        <Text style={styles.description} numberOfLines={2}>
          {task.description}
        </Text>
      ) : null}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          onPress={onToggle}
          style={[styles.btn, styles.primary]}>
          <Text style={styles.btnText}>
            {task.completed ? 'Mark Pending' : 'Mark Done'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onDelete}
          style={[styles.btn, styles.danger]}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'grey',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  btn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: 'blue',
  },
  danger: {
    backgroundColor: 'red',
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
  },
});
