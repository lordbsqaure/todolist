import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import Checkbox from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

function GoalItem(props) {
  function details() {
    return Alert.alert(props.text, "", [
      // The "Yes" button

      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "OK",
      },
    ]);
  }

  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.itempress}>
      <View style={styles.checkboxview}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#4630EB" : undefined}
        />
      </View>
      <View style={styles.writtingitempress}>
        <Pressable onPress={details}>
          <View style={styles.goalitem}>
            <Text style={styles.goaltext}>{props.text}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.deletebutton}>
        <Pressable onPress={props.ondelete.bind(this, props.skey)}>
          <Ionicons name="md-trash" size={32} color="red" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalitem: {
    height: 45,
    justifyContent: "center",

    backgroundColor: "white",
  },
  goaltext: {
    color: "black",
    fontSize: 17,
  },
  itempress: {
    flex: 1,
    margin: 8,
    padding: 3,
    borderRadius: 6,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
  },
  writtingitempress: {
    flex: 15,
    backgroundColor: "black",
    justifyContent: "center",
  },
  checkboxview: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  deletebutton: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GoalItem;
