import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dojo Elite</Text>
      <Text style={styles.subtitle}>Professor Tavares</Text>

      <Text style={styles.sectionTitle}>Modalidades</Text>
      <Text>- Karatê</Text>
      <Text>- Jiu-Jitsu</Text>
      <Text>- Muay Thai</Text>

      <Text style={styles.sectionTitle}>Missão</Text>
      <Text>Promover saúde, disciplina e autoconfiança por meio das artes marciais.</Text>

      <View style={styles.buttons}>
        <Button title="Ver Horários" onPress={() => navigation.navigate('Schedule')} />
        <View style={{ height: 8 }} />
        <Button title="Pré-cadastro" onPress={() => navigation.navigate('Profile')} />
        <View style={{ height: 8 }} />
        <Button title="Contato" onPress={() => navigation.navigate('Contact')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 4 },
  subtitle: { fontSize: 16, marginBottom: 12 },
  sectionTitle: { marginTop: 12, fontWeight: '600' },
  buttons: { marginTop: 20 }
});