import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ShoppingItem({ item, onAdd, onRemove }) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Adicionar" onPress={onAdd} />
                <Button title="Remover" onPress={onRemove} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 16,
    },
    itemName: {
        flex: 1,
    },
    itemQuantity: {
        marginRight: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
});