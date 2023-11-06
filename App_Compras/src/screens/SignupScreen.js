import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase/FirebaseConfig';

export default function SignupForm({ onSignup }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const navigation = useNavigation();

    const handleSignup = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            await auth.currentUser.updateProfile({ displayName: name });
            navigation.navigate('Home');
        } catch (error) {
            // Trate o erro, exiba uma mensagem de erro, etc.
            console.error('Erro no registro:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Button title="Registrar" onPress={handleSignup} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        marginBottom: 16,
        paddingHorizontal: 8,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
});