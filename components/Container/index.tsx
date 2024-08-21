import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { ContainerProps } from './props';
import * as S from './styles';
import { StatusBar } from 'expo-status-bar';

const Container: React.FC<ContainerProps> = ({ children, type }) => {
  const background: ImageSourcePropType = 
    type === 'default' 
      ? require('../../assets/images/background.png') 
      : require('../../assets/images/background2.png');

  return (
    <>
        <StatusBar style="light" backgroundColor="#0e0e0e"/>
        <S.Container source={background}>
        {children}
        </S.Container>
    </>
  );
};

export default Container;
