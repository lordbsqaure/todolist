import { StyleSheet, Text, View, Image, Pressable } from "react-native";

function Headertop() {
  const now = new Date();
  const showdate = now.toUTCString().slice(0, 11);
  return (
    <View style={styles.all}>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.behind}>Welcome Brandon</Text>
        </View>
        <View style={styles.back}>
          <Text style={styles.behind}>{showdate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {},
  container: {
    paddingTop: 40,
    height: 100,

    color: "#fff",
    flexDirection: "row",
    backgroundColor: "purple",
  },
  back: {
    flex: 4,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    paddingLeft: 17,
    flex: 8,
    justifyContent: "center",
    color: "white",
  },
  picture: {
    flex: 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  picture2: {
    position: "relative",
    flex: 2,
    justifyContent: "center",
    borderRadius: 50,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 50,
  },
  behind: {
    color: "white",
    fontSize: 20,
  },
});

export default Headertop;
