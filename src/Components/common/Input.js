import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder,secureTextEntry }) => {
    const { inputStyles, labelStyle, containerStyle,  } = styles;
    
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry ={secureTextEntry
                }
                style={inputStyles} />
        </View>
    )
}
const styles = {
    inputStyles: {
        height: 40,
        flex: 2,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export default Input;