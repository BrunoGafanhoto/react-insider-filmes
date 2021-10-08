//retornar a quantidade de filmes q eu desejar
export const getListFilmes = (size, movie) =>{
     let Filmes = [];
     for (let i = 0, l = size; i < l; i++){
          Filmes.push(movie[i]);
     }
     embaralharFilme(Filmes);
     return Filmes;
}

const embaralharFilme = (arr) =>{
     //loop em todos os elementos
     for(let i = arr.length - 1; i > 0; i--){
          //escolhendo elemento aleatorio
          const j = Math.floor(Math.random() * (i + 1) );
          //reposicionando elemento
         [arr[i], arr[j]] = [arr[j], arr[i]];
     }
     //retornando array aleatorio
     return arr
}

