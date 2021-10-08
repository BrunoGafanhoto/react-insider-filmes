import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 130px;
    align-items: center;
    margin-right: 10px;
`;

export const Title = styled.Text`
     color: #fff;
     margin-top: 4px;
     font-size: 14px;
     font-weight: bold;
     /* width: 120px; */
`;


export const Capa = styled.Image`
     width: 130px;
     height: 170px;
     border-radius: 7px;
     margin-right: 10px;
`;

export const RateContainer = styled.View`
     flex-direction: row;
     align-items: center;
`;

export const Rate= styled.Text`
     margin-left: 4px;
     color: #fff;
     font-size: 11px;
`;