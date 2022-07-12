import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import api from "./services/api";
import { AxiosResponse } from "axios";

type userInfo = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  salary: number;
};

export default function App() {
  const [users, setUsers] = useState<userInfo[]>([]);

  useEffect(() => {
    api
      .get("/person")
      .then((response: AxiosResponse<any>) => {
        setUsers(response.data as userInfo[]);
      })
      .catch((error) => {
        console.log("erro:", error.message);
      });
  });
  return (
    <View style={styles.container}>
      {users.map((user) => {
        return (
          <View style={styles.user} key={user.id}>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: `${user.avatar}` }}
            />
            <Text>{user.name}</Text>
            <Text>{user.role}</Text>
            <Text>${user.salary},00 (Month)</Text>
          </View>
        );
      })}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  user: {
    textAlign: 'center',
    margin: 20
  }
});
