import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ClassCard({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{data.name}</Text>
      <Text>{data.day}</Text>
      <Text>{data.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10
  },
  title: { fontWeight: '700', marginBottom: 4 }
});