import React from "react";
import { View, Text } from "react-native";
import HighlightCard from "../../components/HighlightCard";

import {
  UserInfo,
  UserWrapper,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
} from "./styles";

import { Container, Header } from "./styles";

export function Dashboard() {
  const imageURI = "https://avatars.githubusercontent.com/u/72523657?v=4";

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: imageURI }} />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Mikkaiser</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCard />
    </Container>
  );
}
