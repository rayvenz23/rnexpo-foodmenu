import React from 'react';
import { 
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { colors, } from '../../theme';

export const Button = ({
  title='' as string,
  onPress=null as any,
  style={},
  textStyle={},
  disabled=false,
  color=colors.primary as any,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container, 
        { opacity: disabled ? 0.3 : 1, backgroundColor: color, },
        style
      ]} >
      <Text style={[styles.text, textStyle ]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});