import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LogoutButton = () => {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="log-out-outline"
      size={24}
      color="black"
      style={{ marginRight: 10 }}
      onPress={() => navigation.navigate("login")}
    />
  );
};

export default LogoutButton;
