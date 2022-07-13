import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => (
        <CategoryGridTile title={item.item.title} color={item.item.color} />
      )}
      numColumns={2}
    />
  );
};

export default Categories;
