import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { Feather} from '@expo/vector-icons';


//Aqui voce tem a opcao de criar seus proprios componentes
export const Container = styled.View`
    flex: 1;
    background-color: ${ theme.colors.background};
    
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${theme.colors.primary};
    height: ${RFPercentage(42)};


`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48 )}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGrettings = styled.Text`
    color: ${theme.colors.shape};
    font-size: ${RFValue(18)};
    font-family: ${theme.fonts.regular}
`;

export const UserName = styled.Text`
    color: ${theme.colors.shape};
    font-size: ${RFValue(18)};

    font-family: ${theme.fonts.bold}
`;

export const Icon = styled(Feather)`
    color: ${theme.colors.secondary};
    font-size: ${RFValue(24)};
    
`;