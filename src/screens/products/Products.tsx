import React, { useState, useEffect,} from 'react';
import { FlatList, Text, StyleSheet, } from 'react-native';
import { Container, ProductItem, NavButton } from '../../components';
import { images } from '../../theme';
import useProductsStore from '../../stores/Products';

const Products = ({ navigation=null as any }) => {
  const { dishes, productsStatus, productsError, getDishes, } = useProductsStore();

  useEffect(() => {
    getDishes();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: 'Products',
      headerRight: () => {
        return <NavButton icon={images.icon_plus} onPress={() => navigation.navigate('EditProduct')} />
      },
    })
  }, [navigation]);

  return (
    <Container >
      <FlatList
        data={dishes}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20, }}
        renderItem={({ item, index }) => {
          return (
            <ProductItem
              title={item.name}
              description={item.description}
              cost={item.price}
              photo={item.image}
              onPress={() => navigation.navigate('Details', { item, index })}
            />
          )
        }}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
});

export default Products;