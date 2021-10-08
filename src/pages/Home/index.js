import React, {useState, useEffect, useCallback} from 'react';
import { ScrollView, ActivityIndicator, RefreshControl, TextInput } from 'react-native'
import { 
    Container, SearchContainer, SearchButton,
     Input, ContainerBanner, Banner, SlideContainer,
     Title
} from './styles';
import { Feather } from '@expo/vector-icons';

// imports components
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

import api, {key} from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import {getListFilmes} from '../../services/movie';

const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
};


const Home = () => {


    const navigation = useNavigation();

    const [nowData, setNowData] = useState({});
    const [popularData, setPopularData] = useState({});
    const [topData, setTopData] = useState({});
    const [bannerInicial, setBannerInicial] = useState({});
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
   
    const [refreshing, setRefreshing] = useState(false);

    const handleSearchMovie = () =>{
        setLoading(true);
        if(search !== ''){
            navigation.navigate('Search', {
                name: search
            });
            setSearch('');
        };

        setLoading(false);
    }

        let isActive = true;
        let ac = new AbortController();

    const getMovies = async() =>{
            const [nowFilme, nowPopular, nowTopRate] = await Promise.all([
                await api.get('/movie/now_playing', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                await api.get('/movie/popular', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                await api.get('/movie/top_rated', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
            ]);

                if (isActive){
                    const nowMovie = getListFilmes(20, nowFilme.data.results)
                    const nowPop = getListFilmes(20, nowPopular.data.results)
                    const nowTopR = getListFilmes(20, nowTopRate.data.results)
                    const Banner = getListFilmes(20, nowTopRate.data.results)

                    setNowData(nowMovie);
                    setPopularData(nowPop);
                    setTopData(nowTopR);
                    setBannerInicial(Banner[0]);
                    setLoading(false);

                    
                }
                
        }

    
    const onRefresh = () => {
      setRefreshing(true);

      getMovies();
      wait(1000).then(() => setRefreshing(false));
      
    };



    useEffect(()=>{
        
        getMovies();

        return () =>{
            isActive = false;
            ac.abort();
        };

    }, []);
   
    const pageNavigationDetail = (item) =>{
        navigation.navigate('Detail', {id: item.id})
    }
        
    if(loading){
        return(
            <Container style={{alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={30} color="#fff"/>
            </Container>
        )
    }

    return(
        <Container>
            <Header title="React Prime" />
            <SearchContainer>
                
                <Input placeholder="Ex: Vingadores" placeholderTextColor="rgba(255,255,255,0.55)" value={search} onChangeText={ (text) => setSearch(text) } />
                <SearchButton onPress={ handleSearchMovie }>
                    <Feather name="search" size={30} color='#fff' />
                </SearchButton>
            </SearchContainer>
           <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            showsVerticalScrollIndicator={false}>
            <ContainerBanner activeOpacity={0.7} onPress={() => pageNavigationDetail(bannerInicial)}>
                    <Banner source={{uri:`https://image.tmdb.org/t/p/original${bannerInicial.poster_path}` }} alt="capa" />
                </ContainerBanner>

                <SlideContainer
                    showsHorizontalScrollIndicator={false} 
                    horizontal={true}
                    data={nowData}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => <SliderItem data={item} pageNavigation={() =>pageNavigationDetail(item)} />}
                />
                <Title>Populares</Title>

                <SlideContainer 
                    showsHorizontalScrollIndicator={false} 
                    horizontal={true}
                    data={popularData}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => <SliderItem data={item} pageNavigation={() =>pageNavigationDetail(item)}/>}
                />

                <Title>Mais votados</Title>

                <SlideContainer
                    showsHorizontalScrollIndicator={false} 
                    horizontal={true}
                    data={topData}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => <SliderItem  data={item} pageNavigation={() =>pageNavigationDetail(item)}/>}
                />
           </ScrollView>
        </Container>
    )
}

export default Home;