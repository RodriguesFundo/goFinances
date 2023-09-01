import React from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles'


export function HighlightCard() {
  return (
    <Container>
        <Header>
            <Title>Entrada</Title>
            <Icon name='arrow-up-circle'/>
        </Header>

        <Footer>
            <Amount>R$ 17.400,00</Amount>
            <LastTransaction>Ultima entrada dia 13 de Abril</LastTransaction>
        </Footer>

    </Container>
  )
}