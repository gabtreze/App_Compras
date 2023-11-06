import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ShoppingItem from '../components/ShoppingItem';

export default function ShoppingListScreen() {
    const [shoppingItems, setShoppingItems] = useState([
        { id: 1, name: 'Maçã', quantity: 0 },
        { id: 2, name: 'Banana', quantity: 0 },
        { id: 3, name: 'Laranja', quantity: 0 },
    ]);

    const addItem = (id) => {
        const updatedItems = shoppingItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setShoppingItems(updatedItems);
    };

    const removeItem = (id) => {
        const updatedItems = shoppingItems.map((item) =>
            item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setShoppingItems(updatedItems);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            {shoppingItems.map((item) => (
                <ShoppingItem
                    key={item.id}
                    item={item}
                    onAdd={() => addItem(item.id)}
                    onRemove={() => removeItem(item.id)}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});