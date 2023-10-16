import React from 'react';
import { 
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { colors, } from '../../theme';

export const NavButton = ({
  icon=null as any,
  onPress=null as any,
  style={},
  disabled=false,
  tintColor=colors.white as any,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container, 
        style
      ]} >
        <Image source={icon} style={{...styles.icon, tintColor}} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});