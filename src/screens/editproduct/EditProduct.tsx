import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { Container, NavButton, FormInput, Button, } from '../../components';
import { images, colors, } from '../../theme';
import useProductsStore from '../../stores/Products';
import { productType } from '../../stores/types';

const EditProduct = ({ navigation=null as any, route=null as any, }) => {
  const { productsStatus, createDish, updateDish, deleteDish, } = useProductsStore();
  const [currentProduct, setCurrentProduct ] = useState<any>({});

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const ingredientsRef = useRef(null);
  const priceRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      title: (route?.params?.item ? 'Edit' : 'New') + ' Product',
      headerLeft: () => {
        return <NavButton icon={images.icon_arrow_left} onPress={() => navigation.goBack()} />
      },
    })
  }, [navigation, route]);

  useEffect(() => {
    if (route?.params?.item) {
      setCurrentProduct(route?.params?.item);
    } else {
      setCurrentProduct({
        name: '',
        description: '',
        price: '',
        ingredients: '',
      })
    }
  }, [route]);

  useEffect(() => {
    if (productsStatus === productType.CREATE_DISH_SUCCESS || 
      productsStatus === productType.UPDATE_DISH_SUCCESS ||
      productsStatus === productType.DELETE_DISH_SUCCESS) {
        navigation.navigate('Products');
    }
  }, [productsStatus]);

  const updateField = (field:any, value:any) => {
    setCurrentProduct({
      ...currentProduct,
      [field]: value,
    })
  }

  const saveChanges = () => {
    if (route?.params?.item && (route?.params?.index || route?.params?.index===0)) {
      // Update Product
      updateDish(currentProduct, route?.params?.index);
    } else {
      // Create Product
      createDish(currentProduct);
    }
  }

  const deleteProduct = () => {
    if (route?.params?.item && (route?.params?.index || route?.params?.index===0)) {
      // Delete Product
      deleteDish(route?.params?.index);
    }
  }

  return (
    <Container >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
      >
        <FormInput
          label={'Product Name'}
          placeholder={'Product Name'}
          clearButtonMode={'while-editing'}
          autoCorrect={false}
          value={currentProduct?.name}
          onChangeText={(text:any) => updateField('name', text)}
          inputRef={nameRef}
        />
        <FormInput
          label={'Description'}
          placeholder={'Description'}
          clearButtonMode={'while-editing'}
          autoCorrect={false}
          value={currentProduct?.description}
          onChangeText={(text:any) => updateField('description', text)}
          inputRef={descriptionRef}
          numberOfLines={3}
          multiline
        />
        <FormInput
          label={'Ingredients'}
          placeholder={'Ingredients'}
          clearButtonMode={'while-editing'}
          autoCorrect={false}
          value={currentProduct?.ingredients}
          onChangeText={(text:any) => updateField('ingredients', text)}
          inputRef={ingredientsRef}
          numberOfLines={3}
          multiline
        />
        <FormInput
          label={'Price'}
          placeholder={'Price'}
          clearButtonMode={'while-editing'}
          keyboardType={'numeric'}
          autoCorrect={false}
          value={currentProduct?.price}
          onChangeText={(text:any) => updateField('price', text)}
          inputRef={priceRef}
        />
        <Button
          title={'SAVE'}
          onPress={() => saveChanges()}
        />
        {
          !route?.params?.item ? null :
          <Button
            title={'DELETE'}
            onPress={() => deleteProduct()}
            color={colors.red}
          />
        }
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default EditProduct;