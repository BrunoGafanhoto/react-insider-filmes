import React from 'react';

import { Container, Banner, Title, RateContainer, Rate } from './styles';
import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';

const SearchItem = ({item}) =>{
     const navigation = useNavigation();
     const pageNavigationDetail = () =>{
          navigation.navigate('Detail', {id: item.id})
     }

     return(
          <Container activeOpacity={0.8} onPress={pageNavigationDetail}>
               <Banner source={{uri: `https://image.tmdb.org/t/p/original${item.poster_path}`}}/>
               <Title>{item.title}</Title>
               <RateContainer>
                    <Ionicons name="md-star" size={14} color="#DAA520"/>
                    <Rate>{item.vote_average}/10</Rate>
               </RateContainer>
          </Container>
          
     )
}

export default SearchItem