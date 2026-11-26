import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import { Task } from '../../../src/types/task';
import { useRouter } from 'expo-router';

// Mock de dados (Conforme Requisito do PDF)
const DATA: Task[] = [
  { id: '1', title: 'Prova de PPDM', date: '15/06/2024', category: 'Prova' },
  { id: '2', title: 'Entrega de BCD', date: '18/06/2024', category: 'Trabalho' },
  { id: '3', title: 'Atividade de React Native', date: '20/06/2024', category: 'Atividade' },
];

export default function HomeScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: Task }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => router.push({ 
        pathname: '/details/[id]', 
        params: { id: item.id, title: item.title } 
      })}
    >
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.date} • {item.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f2f5', // Um cinza bem claro para destacar os cards
  },
  listContent: {
    padding: 16,
  },
  item: { 
    padding: 20, 
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    // Bordinha lateral que muda de cor pode ser um upgrade futuro, 
    // por enquanto deixaremos uma cor sólida do Sesi/Senai
    borderLeftWidth: 6,
    borderLeftColor: '#007AFF', 
    // Sombras para dar efeito de card
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subtitle: { 
    fontSize: 14, 
    color: '#666',
  },
});



