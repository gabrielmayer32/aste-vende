// components/ProductList.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  details: {
    marginLeft: 10,
  },
});

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.details}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default ProductList;
