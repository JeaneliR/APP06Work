import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import menuData from '../data/menu.json';

interface MenuItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

const MenuScreen = () => {
  const platillos: MenuItem[] = menuData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú del Día</Text>

      <FlatList
        data={platillos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
            <Text style={styles.precio}>S/ {item.precio.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 4,
  },
  precio: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});
