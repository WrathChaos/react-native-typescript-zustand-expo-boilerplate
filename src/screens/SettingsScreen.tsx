import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useApp, useUser } from '../services/zustand';

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { isDarkMode, language, toggleTheme, setLanguage } = useApp();
  const { user } = useUser();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>{t('settings.title')}</Text>

      {user && (
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>{user.name}</Text>
          <Text style={[styles.email, isDarkMode && styles.darkText]}>{user.email}</Text>
        </View>
      )}

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={[styles.label, isDarkMode && styles.darkText]}>
            {t('settings.darkMode')}
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
          {t('settings.language')}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              language === 'en' && styles.activeButton,
              isDarkMode && styles.darkButton,
            ]}
            onPress={() => setLanguage('en')}
          >
            <Text
              style={[
                styles.buttonText,
                language === 'en' && styles.activeButtonText,
                isDarkMode && styles.darkText,
              ]}
            >
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              language === 'es' && styles.activeButton,
              isDarkMode && styles.darkButton,
            ]}
            onPress={() => setLanguage('es')}
          >
            <Text
              style={[
                styles.buttonText,
                language === 'es' && styles.activeButtonText,
                isDarkMode && styles.darkText,
              ]}
            >
              Español
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 100,
  },
  darkButton: {
    backgroundColor: '#333',
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#000',
  },
  activeButtonText: {
    color: '#fff',
  },
});
