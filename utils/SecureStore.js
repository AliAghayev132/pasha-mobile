import * as SecureStore from 'expo-secure-store';

export const saveItem = async (key, value) => {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
        console.error(`SecureStore save error [${key}]:`, error);
    }
};

export const getItem = async (key) => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.error(`SecureStore get error [${key}]:`, error);
        return null;
    }
};

export const deleteItem = async (key) => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.error(`SecureStore delete error [${key}]:`, error);
    }
};