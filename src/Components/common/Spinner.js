import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Card = ({ size,loading }) => {
    if(!loading){
        return false;
    }
    return (
        <View style={styles.containerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        zIndex:999,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000099',
        opacity: 0.5,
    }
}
export default Card;