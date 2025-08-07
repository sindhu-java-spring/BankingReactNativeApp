import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <SafeAreaView style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setActiveTab("register")}
          style={[
            styles.tab,
            activeTab === "register" && styles.activeTab,
          ]}
        >
          <Text style={[styles.tabText, activeTab === "register" && styles.activeTabText]}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("login")}
          style={[
            styles.tab,
            activeTab === "login" && styles.activeTab,
          ]}
        >
          <Text style={[styles.tabText, activeTab === "login" && styles.activeTabText]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Rendering of Forms */}
      <View style={styles.formContainer}>
        {activeTab === "register" ? (
          <View>
            <Text style={styles.formTitle}>Register</Text>
            <TextInput style={styles.input} placeholder="Name" />
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.formTitle}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "#007bff",
  },
  tabText: {
    fontSize: 16,
    color: "#6c757d",
  },
  activeTabText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#343a40",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#f8f9fa",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});