import React from 'react';
import { 
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { colors, } from '../../theme';

export const ProductItem = ({
  title='' as string,
  description='' as string,
  cost='' as any,
  photo=null as any,
  style={},
  disabled=false,
  onPress=null as any,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container, 
        { opacity: disabled ? 0.3 : 1 },
        style
      ]} >
      <View style={styles.photoContainer} >
        {
          !photo ? null :
          <Image source={{ uri: photo }} style={styles.photo} />
        }
      </View>
      <View style={styles.infoContainer} >
        <View>
          <Text  style={styles.textTitle}>{title}</Text>
          <Text numberOfLines={2} style={styles.textDescription}>{description}</Text>
        </View>
        <Text style={styles.textCost}>${cost}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowRadius: 20,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 20,
    shadowOpacity: 0.1,
    marginBottom: 20,
    padding: 10,
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: colors.gray,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  textTitle: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
  },
  textDescription: {
    color: colors.black,
    fontSize: 12,
  },
  textCost: {
    color: colors.red,
    fontSize: 24,
    fontWeight: '700',
    marginTop: 5,
  },
});