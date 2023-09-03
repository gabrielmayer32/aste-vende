// App.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from './components/ProductList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

const App: React.FC = () => {
  const products = [
    { id: 1, name: 'Apple', price: '$1', image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Banana', price: '$0.5', image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Carrot', price: '$0.7', image: 'https://via.placeholder.com/50' },
  ];

  return (
    <View style={styles.container}>
      <ProductList products={products} />
    </View>
  );
};

export default App;
