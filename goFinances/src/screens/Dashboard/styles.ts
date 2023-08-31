import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

//Aqui voce tem a opcao de criar seus proprios componentes
export const Container = styled.View`
    flex: 1;
    background-color: ghostwhite;
    justify-content: center;
    align-items: center;
    background-color: ${ theme.colors.background};
    
`;

export const Title= styled.Text`
    font-family: ${theme.fonts.bold};
    font-size: 2rem;
    font-weight: bold;
    color: purple;
    color: ${theme.colors.title};
`;