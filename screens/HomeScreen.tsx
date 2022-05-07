import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import { data } from "../assets/data/data";
import pins from "../assets/data/pins";
import Pin from "../components/Pin";

import { Text, View } from "../components/Themed";
// import { RootTabScreenProps } from "../types";    <SafeAreaView style={styles.container}>
interface IMasonryList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
}

export default function HomeScreen({ pins }: IMasonryList) {
  const width = useWindowDimensions().width;

  const numColumns = Math.ceil(width / 350);
  return (
    <ScrollView contentContainerStyle={{ width: "100%" }}>
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.column}>
            {data
              .filter((_, index) => index % numColumns === colIndex)
              .map((pin) => (
                <Pin pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});
