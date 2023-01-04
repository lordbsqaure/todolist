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
} from "react-native";
import GoalItem from "./goalitem";
import Goalinput from "./goalinput";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useMutation,
} from "@apollo/client";
import Headertop from "./header";
import { useQuery } from "@apollo/client";
import { Getdata, Add_list } from "../graphql";
import Piechart from "./piechart";

function Home() {
  const { loading, error, data } = useQuery(Getdata);
  const [addTodo, adddata] = useMutation(Add_list);
  const [coursegoals, setcoursegoals] = useState([]);
  const [modalvisible, setmodalvisible] = useState(false);
  const [modalvisible2, setmodalvisible2] = useState(false);
  const [showBox, setShowBox] = useState(true);

  function startaddgoalhandler() {
    setmodalvisible(true);
  }
  function endaddgoalhandler() {
    setmodalvisible(false);
  }
  function secondmodal() {
    setmodalvisible2(true);
  }

  function addgoalhandler(enteredgoaltext: String) {
    addTodo({
      variables: { text: enteredgoaltext },
      refetchQueries: [{ query: Getdata }],
    });
    setmodalvisible(false);
    setmodalvisible2(false);
  }

  function deletegoalhanderler(id) {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you are done with this task",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            setcoursegoals((currentcoursegoals) => {
              return currentcoursegoals.filter((goal) => goal.key !== id);
            });
            console.log("delete");
            setShowBox(false);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  }

  return (
    <>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Headertop />
      </View>

      <Image
        style={styles.imagestyle}
        source={require("../assets/images/home.jpg")}
      />

      <View style={styles.appcontainer}>
        {modalvisible && (
          <Goalinput
            visible={modalvisible}
            onaddgoal={addgoalhandler}
            oncancel={endaddgoalhandler}
          />
        )}
        {modalvisible2 && (
          <Piechart
            visible={modalvisible2}
            onaddgoal={addgoalhandler}
            oncancel={endaddgoalhandler}
          />
        )}

        <View style={styles.goalscontainer}>
          <Pressable onLongPress={secondmodal}>
            <Text style={styles.title}>Todo list</Text>
          </Pressable>
          {!data && (
            <View style={styles.emptysheet}>
              <Image
                style={styles.emptysheetpic}
                source={require("../assets/images/fill.jpg")}
              />
              <Text style={styles.nolist}>
                No list created. Click the plus icon to start creation
              </Text>
            </View>
          )}
          {data && (
            <FlatList
              data={data.todos}
              renderItem={(itemdata) => {
                return (
                  <GoalItem
                    skey={itemdata.item.id}
                    text={itemdata.item.text}
                    iscomplete={itemdata.item.isComplete}
                    ondelete={deletegoalhanderler}
                    keyExtractor={(item) => item.id}
                  />
                );
              }}
            />
          )}
        </View>
        <Pressable style={styles.button1} onPress={startaddgoalhandler}>
          <View>
            <Text style={styles.addtask}>+</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    minHeight: 100,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  inputcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalscontainer: {
    flex: 4,
  },
  goalitem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  goaltext: {
    color: "white",
  },
  button1: {
    position: "absolute",
    bottom: 35,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    color: "purple",
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  addtask: {
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  title: {
    color: "purple",
    fontSize: 50,
    fontFamily: "Cochin",
    fontStyle: "italic",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    fontWeight: "bold",
    zIndex: 3,
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 50,
  },
  imagestyle: {
    padding: 0,
    position: "relative",
    backgroundColor: "black",
    width: "100%",
    height: 150,

    zIndex: 1,

    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  header: {
    zIndex: 2,
  },
  emptysheet: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  nolist: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Home;
