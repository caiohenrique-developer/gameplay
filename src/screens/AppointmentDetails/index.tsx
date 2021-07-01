import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";

import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { ListHeader } from "../../components/ListHeader.tsx";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/Appointment";

type Params = {
  guildSelected: AppointmentProps;
};

export function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const members = [
    {
      id: "1",
      username: "Caio",
      avatar_url: "https://github.com/caiohenrique-developer.png",
      status: "online",
    },
    {
      id: "2",
      username: "Henrique",
      avatar_url: "https://github.com/caiohenrique-developer.png",
      status: "offline",
    },
    {
      id: "3",
      username: "Caio",
      avatar_url: "https://github.com/caiohenrique-developer.png",
      status: "online",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={20} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
