import {
  StyleSheet,
  Image,
  Modal,
  Button,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";

function Goalinput(props: any) {
  const [enteredgoaltext, setenteredgoaltext] = useState("");
  function goalinputhandler(enteredText: any) {
    setenteredgoaltext(enteredText);
  }
  function addgoalhandler() {
    if (enteredgoaltext === "") {
      return Alert.alert("Field cannot be empty", "", [
        // The "Yes" button

        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "OK",
        },
      ]);
    } else {
      props.onaddgoal(enteredgoaltext);
      setenteredgoaltext("");
    }
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputcontainer}>
        <Text style={styles.instruction}>Please input your objective</Text>
        <Image
          style={styles.image}
          source={require("../assets/images/nobisoftlogo.jpeg")}
        />
        <TextInput
          placeholder="your course goals!"
          style={styles.textinput}
          onChangeText={goalinputhandler}
          value={enteredgoaltext}
        />
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.oncancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={addgoalhandler} color="blue" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    flexDirection: "column",

    alignItems: "center",

    padding: 16,
    paddingTop: 200,
    backgroundColor: "#9969Ba7",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#f0f0ff",
    width: "100%",
    borderRadius: 5,
    padding: 15,
  },
  goalscontainer: {
    flex: 4,
  },
  buttoncontainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 50,
  },
  instruction: {
    fontSize: 30,
  },
});

export default Goalinput;
