import { useAuthStore } from '@/utils/authStore';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const SignIn = () => {
  const { logIn, createAccount, resetOnboarding } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    Alert.alert('Success', `Signed in as ${email}`);
    logIn();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subHeader}>Sign in to your account</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <LinearGradient
              colors={['#00B140', '#00FF80']}
              style={styles.signInButton}
            >
              <Text style={styles.signInButtonText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.testingButtons}>
          <TouchableOpacity style={styles.testButton} onPress={logIn}>
            <Text style={styles.testButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.testButton} onPress={resetOnboarding}>
            <Text style={styles.testButtonText}>Reset Onboarding</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.testButton} onPress={createAccount}>
            <Text style={styles.testButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text style={styles.footerLink} onPress={createAccount}>
              Create one
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7ef',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007A33',
    textAlign: 'center',
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#cde4d6',
  },
  signInButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  testingButtons: {
    marginBottom: 24,
  },
  testButton: {
    backgroundColor: '#d1f0d1',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  testButtonText: {
    color: '#007A33',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#555',
  },
  footerLink: {
    color: '#00B140',
    fontWeight: 'bold',
  },
});

export default SignIn;
