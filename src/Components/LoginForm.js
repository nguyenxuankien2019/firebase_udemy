import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        placeholder="Email"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </CardSection>
                <CardSection>
                    <Button title="Log in" />
                </CardSection>
            </Card>
        )
    }
}
const styles = {
    buttonStyles: {
        flex: 1,
        alignSef: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 15,
        marginBottom: 10
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}
export default LoginForm;