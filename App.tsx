import { useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RootNavigator from './src/navigation/RootNavigator';
import './src/i18n';
import { useApp } from './src/services/zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();

const THEME_STORAGE_KEY = '@theme_mode';
const LANGUAGE_STORAGE_KEY = '@language';

export default function App() {
  const { setInitialized, isDarkMode, setLanguage, toggleTheme } = useApp();

  const [fontsLoaded] = useFonts({
    Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
  });

  useEffect(() => {
    async function loadInitialState() {
      try {
        // Load saved theme
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
          const isDark = JSON.parse(savedTheme);
          if (isDark !== isDarkMode) {
            // Only toggle if different from default
            toggleTheme();
          }
        }

        // Load saved language
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (savedLanguage) {
          setLanguage(savedLanguage);
        }

        setInitialized(true);
      } catch (error) {
        console.error('Error loading initial state:', error);
        setInitialized(true);
      }
    }

    loadInitialState();
  }, [isDarkMode, setInitialized, setLanguage, toggleTheme]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
