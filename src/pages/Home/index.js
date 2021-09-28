import React from 'react';
import { View, Text } from 'react-native'
import { Container, SearchContainer, SearchButton, Input } from './styles';
import { Feather } from '@expo/vector-icons';

// imports components
import Header from '../../components/Header';


const Home = () => {
    return(
        <Container>
            <Header title="React Prime" />
            <SearchContainer>
                <Input placeholder="Ex: Vingadores" placeholderTextColor="rgba(255,255,255,0.55)"/>
                <SearchButton>
                    <Feather name="search" size={30} color='#fff' />
                </SearchButton>
            </SearchContainer>
        </Container>
    )
}

export default Home;