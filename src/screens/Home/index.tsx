import { useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

import { PrimaryButton, SecondaryButton } from '@/components';
import { Text, View } from '@/components/Themed';
import { useCounter } from '@/hooks';
import { formatDate, validateEmail } from '@/utils';
import * as userService from '@/services';
import { appConfig } from '@/config/appConfig';

/**
 * Home Screen Component
 * 
 * This screen component is returned from /src/app/(tabs)/index.tsx
 * 
 * This demonstrates the complete flow of the organized folder structure:
 * 
 * 1. COMPONENTS: Using reusable button components (PrimaryButton, SecondaryButton)
 * 2. HOOKS: Using custom hooks (useCounter) for stateful logic
 * 3. UTILS: Using utility functions (formatDate, validateEmail) for common operations
 * 4. SERVICES: Using service layer (userService) for business logic
 * 5. SERVER: Services internally use server/API layer (userApi) for data fetching
 * 6. CONFIG: Using app configuration (appConfig) for settings
 * 
 * Flow: Screen → Components/Hooks → Services → Server/API → Backend
 */
export default function HomeScreen() {
  const { t } = useTranslation();
  
  // Example 1: Using a custom hook
  // Hooks encapsulate stateful logic and can be reused across components
  const { count, increment, decrement, reset } = useCounter(0);
  
  // Example 2: Using utility functions
  const [email] = useState('user@example.com');
  const [testDate] = useState(new Date().toISOString());
  
  // Example 3: Using services (which internally use server/API)
  const handleFetchUser = async () => {
    try {
      // Service layer handles business logic and validation
      const response = await userService.getUserById('user123');
      
      if (response.success) {
        Alert.alert('Success', `User fetched: ${response.data?.name || 'User data'}`);
      } else {
        Alert.alert('Error', response.message || 'Failed to fetch user');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching user');
    }
  };
  
  // Example 4: Using utility functions for validation
  const handleValidateEmail = () => {
    const isValid = validateEmail(email);
    Alert.alert(
      'Email Validation',
      `Email "${email}" is ${isValid ? 'valid' : 'invalid'}`
    );
  };
  
  // Example 5: Using configuration
  const handleShowConfig = () => {
    Alert.alert(
      'App Configuration',
      `API Base URL: ${appConfig.api.baseUrl}\nApp Name: ${appConfig.app.name}\nVersion: ${appConfig.app.version}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('tabs.one.title')}</Text>
        <Text style={styles.subtitle}>Folder Structure Examples</Text>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        {/* Example 1: Using Custom Hooks */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Custom Hooks (hooks/)</Text>
          <Text style={styles.description}>
            Using useCounter hook for stateful logic
          </Text>
          <Text style={styles.counterText}>Count: {count}</Text>
          <View style={styles.buttonRow}>
            <PrimaryButton title="Increment" onPress={increment} />
            <SecondaryButton title="Decrement" onPress={decrement} />
          </View>
          <SecondaryButton title="Reset" onPress={reset} />
        </View>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        {/* Example 2: Using Components */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Components (components/)</Text>
          <Text style={styles.description}>
            Reusable button components (PrimaryButton, SecondaryButton)
          </Text>
          <View style={styles.buttonRow}>
            <PrimaryButton 
              title="Primary Button" 
              onPress={() => Alert.alert('Primary', 'Primary button pressed!')} 
            />
            <SecondaryButton 
              title="Secondary Button" 
              onPress={() => Alert.alert('Secondary', 'Secondary button pressed!')} 
            />
          </View>
        </View>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        {/* Example 3: Using Utils */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Utilities (utils/)</Text>
          <Text style={styles.description}>
            Utility functions for common operations
          </Text>
          <Text style={styles.infoText}>
            Formatted Date: {formatDate(testDate)}
          </Text>
          <PrimaryButton title="Validate Email" onPress={handleValidateEmail} />
        </View>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        {/* Example 4: Using Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Services (services/)</Text>
          <Text style={styles.description}>
            Service layer handles business logic and uses server/API layer
          </Text>
          <PrimaryButton 
            title="Fetch User (Service)" 
            onPress={handleFetchUser} 
          />
          <Text style={styles.noteText}>
            Note: This will fail in demo (no backend), but shows the flow
          </Text>
        </View>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        {/* Example 5: Using Config */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Configuration (config/)</Text>
          <Text style={styles.description}>
            App-wide configuration settings
          </Text>
          <PrimaryButton title="Show Config" onPress={handleShowConfig} />
        </View>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        {/* Architecture Flow Explanation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Architecture Flow</Text>
          <Text style={styles.flowText}>
            Screen → Components/Hooks → Services → Server/API → Backend
          </Text>
          <Text style={styles.noteText}>
            Check the code comments in each file to understand the structure!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
  },
  section: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  noteText: {
    fontSize: 12,
    opacity: 0.6,
    fontStyle: 'italic',
    marginTop: 8,
    textAlign: 'center',
  },
  flowText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
});

