import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";

import { data } from "../assets/data/data";
import Pin from "../components/Pin";

import { Text, View } from "../components/Themed";
// import { RootTabScreenProps } from "../types";    <SafeAreaView style={styles.container}>

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((n) => {
          return <Pin key={n.id} title={n.title} image={n.image} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
