import { useEffect, useState } from "react";
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
  Modal,
} from "react-native";

export function Piechart(props: any) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.button}>
        <Text title="cancel" onPress={props.oncancel} color="#f31282">
          x
        </Text>
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.instruction}>Please input your objective</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});

export default Piechart;
