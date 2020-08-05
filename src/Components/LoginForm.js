import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';
import { TextInput } from 'react-native';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }

    handleLogin = () => {
        const { email, password } = this.state;
        this.setState({error:'', loading: true})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
            .catch((err) => {
                console.log(err,'errerr');
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess)
                    .catch(this.onLoginFailed);
            });
    }
    onLoginSuccess() {
        console.log('onLoginSuccess');
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false
        })
    }
    onLoginFailed() {
        console.log('onLoginFailed');
        this.setState({
            error:'Authentication Failed.',
            loading:false
        })
    }
    render() {
        const { errorStyle } = styles;
        // if(this.state.loading){
        //     return <Spinner size="small"/>
        // }
        return (
            <Card>
                <Spinner 
                loading={this.state.loading}
                size="small"/>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email})}
                        placeholder="Email"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password})}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </CardSection>
                <Text style={errorStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    <Button
                        onPress={this.handleLogin}
                        title="Log in" />
                </CardSection>
            </Card>
        )
    }
}
const styles = {
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 15,
        marginBottom: 10
    },
    errorStyle: {
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
        color: 'red',
        marginLeft: 12
    }
}
export default LoginForm;