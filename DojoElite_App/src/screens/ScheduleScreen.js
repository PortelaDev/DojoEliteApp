import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ClassCard from '../components/ClassCard';

const classes = [
  { id: '1', name: 'Karatê - Infantil', day: 'Segunda/Quarta', time: '17:00 - 18:00' },
  { id: '2', name: 'Jiu-Jitsu - Adulto', day: 'Terça/Quinta', time: '19:00 - 20:30' },
  { id: '3', name: 'Muay Thai - Fitness', day: 'Segunda/Sexta', time: '18:00 - 19:00' }
];

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={classes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ClassCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 }
});