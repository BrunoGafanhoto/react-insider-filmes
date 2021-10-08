import React, {useState, useEffect} from 'react';
import { Container, Name } from './styles';
import {useNavigation, useRoute } from '@react-navigation/native';
import api, {key} from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import SearchItem from '../../components/SearchItem';
import { ActivityIndicator } from 'react-native';
import { acc } from 'react-native-reanimated';

const Search = () => {

     const [movie, setMovie] = useState([]);
     const [loading, setLoading] = useState(true);
     const route = useRoute();

     useEffect(() =>{
          let isActive = true;
          let ac = new AbortController();
          const searchMovie = async() => {
               const response = await api.get(`/search/movie?query=${route.params?.name}`,{
                    params:{
                         api_key: key,
                         language: 'pt-BR',
                         page: 1
                    }
               })
               if(isActive){
                    setMovie(response.data.results);
                    setLoading(false);
               }
            
          }
          searchMovie();

          return(() =>{
               isActive = false;
               ac.abort();
          })

     }, [])

     if(loading){
          return(
               <Container>
                    <ActivityIndicator size={35} color="#fff"/>
               </Container>
          )
     }
     console.log(movie.length);
     if(movie.length === 0){
          return(
               <Container style={{alignItems:'center'}}>
                    <Name>Nenhum resultado encontrado :(</Name>
               </Container>
          )
     }
     return(
          <Container>
               
               <FlatList 
                    // showsVerticalScrollIndicator={false}
                    data={movie}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => <SearchItem item={item} />}
               />
          </Container>
     )
}

export default Search;