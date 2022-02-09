import AsyncStorage from "@react-native-async-storage/async-storage";

export const setSetting = (key, value) => AsyncStorage.setItem(key, value)
export const getSetting = (key) => AsyncStorage.getItem(key)