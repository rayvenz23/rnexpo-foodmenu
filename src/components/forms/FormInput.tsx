import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const FormInput = (props:any) => {
  return (
    <View style={[
      styles.inputContainer,
      props.style,
      props.inputContainerStyle,
    ]} >
      <Text style={styles.label} >{props.label || ''}</Text>
      <TextInput
        ref={props.inputRef}
        style={{
          ...styles.inputStyle, 
          ...props.inputStyle,
          paddingTop: props?.multiline ? 20 : 5,
          paddingBottom: props?.multiline ? 20 : 5,
        }}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  inputStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    minHeight: 50,
    textAlign: 'left',
    fontSize: 14,
    paddingHorizontal: 15,
    borderRadius: 10,
    paddingTop: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
    textTransform: 'uppercase',
    color: colors.primary,
  },
});