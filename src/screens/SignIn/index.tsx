import React from "react";
import { Text, View, Image, Alert } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import { styles } from "./styles";

import IllustrationImg from "../../assets/illustration.png";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { user, SignIn } = useAuth();

  async function handleSignIn() {
    try {
      await SignIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>

          <Text style={styles.subTitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
