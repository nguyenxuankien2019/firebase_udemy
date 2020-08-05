import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonComponent = ({onPress, title }) => {
    const { buttonStyles, textStyle } = styles;
    return (
        <TouchableOpacity
        onPress = {onPress}
        style={buttonStyles}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = {
    buttonStyles: {
       height: 50 ,
        alignSef: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 15,
        marginBottom: 10
    },
    textStyle:{
        alignSelf:'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}
export default ButtonComponent;