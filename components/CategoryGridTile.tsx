import { Pressable, StyleSheet, View, Text } from "react-native";

interface _props {
  title: string;
  color: string;
}

const CategoryGridTile = (props: _props) => {
  return (
    <View>
      <Pressable android_ripple={{ color: "" }}>
        <Text>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,
    height: 150,
    borderRadius: 20,
  },
});
