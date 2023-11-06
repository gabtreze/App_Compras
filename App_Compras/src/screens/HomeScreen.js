import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';
import { auth } from '../firebase/FirebaseConfig';

export default function HomeScreen({ navigation }) {
    const handleLogin = async (email, password) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            navigation.navigate('ShoppingList');
        } catch (error) {
            // Trate o erro, exiba uma mensagem de erro, etc.
        }
    };

    return (
        <View style={styles.container}>
            <LoginForm onLogin={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});