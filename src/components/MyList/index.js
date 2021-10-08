import React from 'react'
import { Container, Title, RateContainer, Rate, ButtonContainer, Button, TextButton, Lixeira } from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MyList = ({data, deleteFavorite}) => {
    
     const navigation = useNavigation();
     const pageNavigationDetail = (item) =>{
          navigation.navigate('Detail', {id: item.id})
      }
     

     return(
          <Container>
            <Title>{data.title}</Title>
            <RateContainer>
               <Ionicons name="md-star" size={16} color="#DAA520"/>
               <Rate>{data.vote_average}</Rate>
            </RateContainer>
            
            <ButtonContainer>
                 <Button onPress={() => pageNavigationDetail(data)}>
                    <TextButton>Ver detalhes</TextButton>
                 </Button>
                 <Lixeira onPress={() => deleteFavorite()}>
                    <Feather name="trash" size={25} color="#fff" />
                 </Lixeira>
            </ButtonContainer>

          </Container>
     )
}

export default MyList;