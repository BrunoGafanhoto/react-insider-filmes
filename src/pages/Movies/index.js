import React,  { useState, useEffect } from 'react';

import {Container, ListMovies, ContainerMsg} from './styles'

// imports components
import Header from '../../components/Header';
import MyList from '../../components/MyList';
import { getMovieSave, deleteMovie } from '../../utils/storage';
import { useIsFocused } from '@react-navigation/native';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons'


const Movies = () =>{
    const isFocused = useIsFocused();
    const [movie, setMovie] = useState({});
    const getAllSaves = async() => {
        const response = await getMovieSave('movies');
        setMovie(response)
    }
    const deleteFavoriteMovie = async(movie) => {
        await deleteMovie(movie);
        getAllSaves()
    }

    useEffect(() =>{
        getAllSaves()    
    }, [isFocused])
    
     
        
    

    return(
        
        <Container>

            <Header title="Minha Lista"/>
            {movie.length === 0 &&
        
                <ContainerMsg style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, color:'#fff', marginRight: 5}}>Nenhum filme salvo</Text>
                    <Feather name="frown" size={20} color="#E7A74e"/>
                </ContainerMsg>
        
            }
            <ListMovies 
                showsVerticalScrollIndicator={false}
                data={movie}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <MyList data={item} deleteFavorite={() => deleteFavoriteMovie(item.id)} />}
            />
        </Container>
      
    )
}

export default Movies;