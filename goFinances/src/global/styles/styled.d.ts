// Este ficheiro serve para subscrever as propriedades padroes do styled component
import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme
    
    export interface DefaultTheme extends ThemeType { }

}