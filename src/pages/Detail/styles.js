import styled from 'styled-components/native';


export const Container = styled.View`
     flex: 1;
     background-color: #191a30;
`;

export const Header = styled.View`
     z-index: 99;
     position: absolute;
     top: 30px;
     width: 100%;
     justify-content: space-between;
     flex-direction: row;
     padding:  14px;
`;


export const HeaderButton = styled.TouchableOpacity`
     width: 45px;
     height: 45px;
     background-color: rgba(25,26,48,0.8);
     border-radius: 45px;
     justify-content: center;
     align-items: center;
`;
export const BannerDetail = styled.Image`
     height: 400px;
     border-bottom-left-radius: 70px;
     border-bottom-right-radius: 70px;
`;

export const Link = styled.TouchableOpacity`
     position: absolute;
     top: 350px;
     right: 15px;
     width: 63px;
     height: 63px;
     border-radius: 35px;
     background-color: #e72f49;
     align-items: center;
     justify-content: center;
     z-index: 99;
`;
export const Title = styled.Text`
     color: #fff;
     font-weight: bold;
     font-size: 22px;
     padding: 8px 14px;
     margin-top: 8px;
     
`;

export const ContentArea = styled.View`
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     padding: 0 14px;
    
`;
export const Rate = styled.Text`
     color: #fff;
     font-size: 18px;
     font-weight: bold;
`;

export const Generos = styled.Text`
     background-color: #fff;
     height: 30px;
     color: #000;
     line-height: 25px;
     text-align: center;
     padding: 0 20px;
     border-radius: 8px;
     align-items: center;
     margin: 10px 0;
     margin-left: 10px; 
     
`;
export const ContainerGeneros = styled.View`
     height: 50px;
`;
export const ListaGeneros = styled.FlatList``;

export const Description = styled.Text`
     color: #fff;
     margin: 0 14px;
     font-size: 15px;
     text-align: justify;
     padding-bottom: 30px;
`;