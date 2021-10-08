import styled from 'styled-components/native'

export const Container = styled.View`
     margin: 20px 0;
     padding: 0 14px;
`;
export const Title = styled.Text`
     font-size: 18px;
     font-weight: bold;
     color: #fff;
`;
export const RateContainer = styled.View`
     flex-direction: row;
     align-items: center;
`;
export const Rate = styled.Text`
     margin-left: 4px;
     color: #fff;
`;
export const ButtonContainer = styled.View`
     margin-top: 10px;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
`;
export const TextButton = styled.Text`
     background-color:#e72f49;
     color: #fff;
    
     border-radius: 25px;
     display: flex;
     padding: 5px;
     text-align: center;
`;

export const Button = styled.TouchableOpacity`
     width: 85%;
`;
export const Lixeira = styled.TouchableOpacity`
     align-items: center;
`;
