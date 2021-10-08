import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #141a29;
    flex: 1;
    padding: 4px 0;
`;
export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 14px;
    margin-bottom: 8px;
`;
export const Input = styled.TextInput`
    background-color: rgba(255,255,255,0.4);
    width: 85%;
    height: 50px;
    border-radius: 25px;
    padding: 8px 15px;
    font-size: 16px;
    color: #fff;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;
export const ContainerBanner = styled.TouchableOpacity``;

export const Banner = styled.Image`
    
    height: 200px;
    margin: 10px 14px;
    border-radius: 7px;
`;

export const SlideContainer = styled.FlatList`
    margin-left: 14px;
`;

export const Title = styled.Text`
    font-size: 25px;
    color:#fff;
    font-weight: bold;
    margin: 15px 0;
    margin-left: 14px;
`;
