import React from 'react';
import { View, Text, StyleSheet, Linking, Button } from 'react-native';

export default function ContactScreen() {
  const address = 'Rua das Palmeiras, 245 - Centro';
  const phone = '(XX) XXXX-XXXX';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={{ marginTop: 8 }}>{address}</Text>
      <Text style={{ marginTop: 4 }}>{phone}</Text>

      <View style={{ marginTop: 12 }}>
        <Button title="Ligar" onPress={() => Linking.openURL(`tel:${phone.replace(/[^0-9]/g,'')}`)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: '700' }
});