import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

//Aqui voce tem a opcao de criar seus proprios componentes
export const Container = styled.View`
    flex: 1;
    background-color: ${ theme.colors.background};
    
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${theme.colors.primary};
    height: 278px;

`;

export const UserWrapper = styled.View`
    
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    border: solid 2px red;
`;

export const Photo = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: solid 2px red;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGrettings = styled.Text`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.regular}
`;

export const UserName = styled.Text`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.bold}
`;
