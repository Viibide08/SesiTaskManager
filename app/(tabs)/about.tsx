import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>3ºEM/2DEV</Text>
      <Text style={styles.name}>Vitoria Ibide</Text>
      <Text style={styles.info}>Curso: Desenvolvimento de Sistemas</Text>
      <Text style={styles.info}>Instituição: SESI/SENAI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  name: { fontSize: 20, color: '#007AFF', marginBottom: 5 },
  info: { fontSize: 16, color: '#666' },
});
