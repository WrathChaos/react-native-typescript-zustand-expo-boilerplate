import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useApp, useUser } from '../services/zustand';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { isDarkMode } = useApp();
  const { user } = useUser();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>
        {t('home.welcome')}
      </Text>
      {user && (
        <Text style={[styles.greeting, isDarkMode && styles.darkText]}>
          {t('home.greeting', { name: user.name })}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  darkText: {
    color: '#fff',
  },
}); 