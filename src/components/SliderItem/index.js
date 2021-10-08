import React from 'react';

import { Container, Title, Capa, RateContainer, Rate } from './styles'
import { Ionicons } from '@expo/vector-icons';


const SliderItem = ({data, pageNavigation}) =>{
     return(
          <Container activeOpacity={0.75} onPress={()=> pageNavigation(data)}>
               <Capa source={{uri:`https://image.tmdb.org/t/p/original${data.poster_path}` }}/>
               <Title numberOfLines={1}>{data.title}</Title>

               <RateContainer>
                    <Ionicons name="md-star" size={12} color="#DAA520"/>
                    <Rate>{data.vote_average}/10</Rate>
               </RateContainer>
          </Container>
     )
}

export default SliderItem;