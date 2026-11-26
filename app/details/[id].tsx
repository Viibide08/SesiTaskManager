import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  // Pegando os parâmetros que passamos na Home
  const { id, title } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Configura o título da barra superior dinamicamente */}
      <Stack.Screen options={{ title: `Tarefa: ${id}` }} />
      
      <Text style={styles.title}>Tarefa</Text>
      <Text style={styles.info}>ID: {id}</Text>
      <Text style={styles.info}>Título:{title}</Text>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 18, color: '#333' },
});
