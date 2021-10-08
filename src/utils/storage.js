import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os filmes salvos

export const getMovieSave = async(key) => {
     const myMovies = await AsyncStorage.getItem(key);

     let moviesSave = JSON.parse(myMovies) || [];
     
     return moviesSave;
}

//salvar um novo filme
export const saveMovie = async(key, newMovie) => {
     let moviesStored = await getMovieSave(key);
     //se tver algum filme salvo com esse id precisamos ignorar
     const hasMovie = moviesStored.some(item => item.id === newMovie.id)   

     if(hasMovie){
          console.log('ja esta saklvo');
          return;
     }

     moviesStored.push(newMovie);

     await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
     console.log('FILME SALVO COM SUCESSO');
}

// deletar algum filme
export const deleteMovie = async(id) => {
     console.log(id);
     let moviesStored = await getMovieSave('movies');

     let myMovies = moviesStored.filter( item => {
          return (item.id !== id)
     });

     await AsyncStorage.setItem('movies', JSON.stringify(myMovies) );
     console.log('Filme deletado com sucesso')
     return myMovies;
}
//filtrar algum filme se ja esta salvo

export const hasMovie = async(movie) => {
     let moviesStored = await getMovieSave('movies');
     const hasMovie = moviesStored.find( item => item.id === movie.id);
     if(hasMovie){
          return true;
     }
     return false;
}