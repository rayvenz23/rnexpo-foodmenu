import React, { useState, useEffect,} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, } from 'react-native';
import { Container, NavButton, Button, } from '../../components';
import { images, colors, } from '../../theme';
import useProductsStore from '../../stores/Products';
import { productType } from '../../stores/types';

const Details = ({ navigation=null as any, route=null as any, }) => {
  const { productsStatus, deleteDish, } = useProductsStore();
  const [currentProduct, setCurrentProduct ] = useState<any>(null);

  useEffect(() => {
    navigation.setOptions({
      title: 'Details',
      headerLeft: () => {
        return <NavButton icon={images.icon_arrow_left} onPress={() => navigation.goBack()} />
      },
    })
  }, [navigation]);

  useEffect(() => {
    if (route?.params?.item) {
      setCurrentProduct(route?.params?.item);
    }
  }, [route]);

  useEffect(() => {
    if (productsStatus === productType.DELETE_DISH_SUCCESS) {
      navigation.navigate('Products');
    }
  }, [productsStatus]);

  const deleteProduct = () => {
    if (route?.params?.item && route?.params?.index) {
      // Delete Product
      deleteDish(route?.params?.index);
    }
  }

  return (
    <Container >
      <ScrollView >
        <View style={styles.photoContainer} >
          {
            !currentProduct?.image ? null :
            <Image source={{ uri: currentProduct.image }} style={styles.photo} />
          }
        </View>
        <View style={styles.infoContainer} >
          <Text style={styles.textTitle}>{currentProduct?.name}</Text>
          <Text style={styles.textCost}>${currentProduct?.price}</Text>
          <Text style={styles.textLabel}>DESCRIPTION</Text>
          <Text style={styles.textValue}>{currentProduct?.description}</Text>
          <Text style={styles.textLabel}>INGREDIENTS</Text>
          <Text style={styles.textValue}>{currentProduct?.ingredients}</Text>
          <View style={{ marginTop: 30 }} >
            <Button title={'Edit'} color={colors.blue} onPress={() => navigation.navigate('EditProduct', { item: route?.params?.item, index: route?.params?.index })} />
            <Button title={'Delete'} color={colors.red} onPress={() => deleteProduct()} />
          </View>
        </View>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  photoContainer: {
    width: '100%',
    height: 300,
    backgroundColor: colors.gray,
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  textCost: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.red,
  },
  textLabel: {
    fontSize: 12,
    fontWeight: '800',
    marginTop: 30,
    marginBottom: 10,
  },
  textValue: {
    fontSize: 16,
    fontWeight: '300',
  },
});

export default Details;