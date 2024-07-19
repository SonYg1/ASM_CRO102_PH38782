// Login.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ email, setEmail, password, setPassword, handleLogin, switchToSignUp }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={handleLogin} color="#3498db" />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={switchToSignUp}>
          Need an account? Sign Up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
});

export default Login;
