import React, {useState, useEffect} from 'react';
import { Header, HeaderButton, Container,
      BannerDetail, Link, Title,ContentArea, Rate, sliderGeneros,
      Generos, Description, ListaGeneros, ContainerGeneros
} from './styles'

import { Modal } from 'react-native';
import Stars from 'react-native-stars';

import api, {key} from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Feather, Ionicons} from '@expo/vector-icons';

import { ScrollView } from 'react-native';
import ModalLink from '../../components/ModalLink';
import { saveMovie, hasMovie, deleteMovie } from '../../utils/storage';

const Detail = () =>{

     const navigation = useNavigation();
     const route = useRoute();

     const [movie, setFilme] = useState({});
     const [openLink, setOpenLink] = useState(false);
     const [favorite, setFavorite] = useState(false);

     const favoriteMovie = async(movie) => {
         await saveMovie('movies',movie);
         setFavorite(true);
     }
     const deleteFavoriteMovie = async(movie) => {
          await deleteMovie(movie);
          setFavorite(false);
      }

     useEffect(() =>{
          console.log(favorite)
          let isActive = true;
          let ac = new AbortController();
          const getMovie = async() => {
               const response = await api.get(`/movie/${route.params?.id}`,{
                    params:{
                         api_key: key,
                         language: 'pt-BR',
                         page: 1
                    }
               })
               if(isActive){
                    setFilme(response.data);
                    const isFavorite = await hasMovie(response.data);
                
                    setFavorite(isFavorite)
               }
          }

          getMovie();

          return (() => {
               isActive = false;
               ac.abort();
          })

     }, [])
     return(
         <Container>
               <Header>
                    <HeaderButton onPress={() => navigation.goBack()}>
                         <Feather name="arrow-left" size={24} color="#fff" />
                    </HeaderButton>
                    
                    {favorite ?  (<HeaderButton onPress={() => deleteFavoriteMovie(movie.id)}>
                          <Ionicons name="bookmark" size={24} color="#fff" />
                          </HeaderButton>)
                         :(
                              <HeaderButton onPress={() => favoriteMovie(movie)}>
                              <Ionicons name="bookmark-outline" size={24} color="#fff" />
                          </HeaderButton>
                         )
                         }
                         
                   
               </Header>
               <BannerDetail resizeMode="cover" source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }} alt="Capa Detail"/>
               <Link onPress={() => setOpenLink(true)}>
                    <Feather name="link" size={25} color="#fff"/>
               </Link>
               <Title numberOfLines={2}>{movie.title}</Title>
               <ContentArea>
                    <Stars 
                         default={movie.vote_average}
                         count={10}
                         half={true}
                         starSize={20}
                         fullStar={ <Ionicons name="md-star" size={24} color="#E7A74e" />}
                         emptyStar={<Ionicons name="md-star-outline" size={24} color="#E7A74e" />}
                         halfStar={<Ionicons name="md-star-half" size={24} color="#E7A74e"/>}
                         disable={true}
                    />
                    <Rate>{movie.vote_average}/10</Rate>
                   
               </ContentArea>
              <ContainerGeneros>
               <ListaGeneros 
                              showsHorizontalScrollIndicator={false}
                              style={{marginLeft: 4}}
                              horizontal={true}
                              data={movie.genres}
                              keyExtractor={(item) => String(item.id)}
                              renderItem={({item}) => <Generos>{item.name}</Generos>}
               />
              </ContainerGeneros>

                    <ScrollView showsHorizontalScrollIndicator={false}>
                         <Title>Descrição</Title>
                         <Description>{movie.overview}</Description>
                    </ScrollView>
                    
                    <Modal 
                         animationType="slide"
                         transparent={true}
                         visible={openLink}
                    >
                         <ModalLink 
                              link={movie?.homepage}
                              title={movie?.title}
                              closeModal={() => setOpenLink(false)}
                         />
                    </Modal>
              
         </Container>
     )
}

export default Detail;