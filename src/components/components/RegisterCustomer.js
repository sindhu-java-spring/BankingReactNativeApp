import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const RegisterCustomerScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required.";
    if (!password.trim() || password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validate()) {
      Alert.alert("Success", "Customer registered successfully!");
      // Add your registration logic here (e.g., API call)
    }
  };

  return (
    <View>
      <Text className="text-lg font-bold mb-4">Register Customer</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        className="border p-2 mb-2"
      />
      {errors.name && <Text className="text-red-500">{errors.name}</Text>}

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border p-2 mb-2"
        keyboardType="email-address"
      />
      {errors.email && <Text className="text-red-500">{errors.email}</Text>}

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border p-2 mb-2"
        secureTextEntry
      />
      {errors.password && <Text className="text-red-500">{errors.password}</Text>}

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterCustomerScreen;