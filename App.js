import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./StyleGlobal";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Abra o arquivo App.js e comece a trabalhar no seu projeto!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
