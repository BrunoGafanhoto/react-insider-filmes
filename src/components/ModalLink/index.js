import React, {useState} from 'react';
import { ActivityIndicator, View } from 'react-native';

import { BackButton, Name } from './styles';
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview'


const ModalLink = ({link, title, closeModal}) => {
     
     const [loading, setLoading] = useState(true);

    

     return(
          <>
               <BackButton onPress={closeModal}>
                    <Feather name="x" size={35} color="#fff"/>
                    <Name>{title}</Name>
               </BackButton>
               {loading &&
                    <View style={{height: '100%', backgroundColor:"#000", justifyContent: 'center'}}>
                         <ActivityIndicator size={35} color="#fff"/> 
                    </View>
               }
               <WebView 
               onLoadEnd={() => setLoading(false)}
               source={{uri: link}}
               />
               
         </>
     )
}

export default ModalLink;