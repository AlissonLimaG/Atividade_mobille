import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddButton = () => {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="add-outline"
      size={24}
      color="black"
      style={{ marginRight: 10 }}
      onPress={() => navigation.navigate("cadastroContato")}
    />
  );
};

export default AddButton;
