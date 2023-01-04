import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Button,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  Alert,
} from "react-native";
import GoalItem from "./components/goalitem";
import Goalinput from "./components/goalinput";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Headertop from "./components/header";
import Home from "./components/home";
// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://107c-154-72-171-237.eu.ngrok.io/api/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
