import {
  Pressable,
  StyleSheet,
  View,
  Text,
  GestureResponderEvent,
} from "react-native";
import colors from "../utils/colors";

interface _props {
  title: string;
  color: string;
  onPress: (e: GestureResponderEvent) => void;
}

const CategoryGridTile = (props: _props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressedItem]}
        android_ripple={{ color: "#fafafa" }}
        onPress={props.onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 20,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  pressedItem: {
    borderColor: colors.primary,
    borderWidth: 4,
  },
  button: {
    flex: 1,
    borderRadius: 20,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
