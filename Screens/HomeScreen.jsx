import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="New Tweet"
        onPress={() => navigation.navigate("New Tweet")}
      />
      <Button
        title="Tweet Screen"
        onPress={() => navigation.navigate("Tweet Screen")}
      />
      <Button
        title="Profile Screen"
        onPress={() => navigation.navigate("Profile Screen")}
      />
    </View>
  );
}
