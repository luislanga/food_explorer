import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }
    
    &:focus{
        outline: none;
    }
    
    body{
        background: var(--bg-dark-400);
    }

    :root{
        font-size: 62.5%;
        
        //Font families
        --ff-main: "Poppins";
        --ff-secondary: "Roboto";
        
        //Backgrounds (Dark)
        --bg-dark-100: ${({theme}) => theme.DARK.DARK_100};
        --bg-dark-200: ${({theme}) => theme.DARK.DARK_200};
        --bg-dark-300: ${({theme}) => theme.DARK.DARK_300};
        --bg-dark-400: ${({theme}) => theme.DARK.DARK_400};
        --bg-dark-500: ${({theme}) => theme.DARK.DARK_500};
        --bg-dark-600: ${({theme}) => theme.DARK.DARK_600};
        --bg-dark-700: ${({theme}) => theme.DARK.DARK_700};
        --bg-dark-800: ${({theme}) => theme.DARK.DARK_800};
        --bg-dark-900: ${({theme}) => theme.DARK.DARK_900};
        --bg-dark-1000: ${({theme}) => theme.DARK.DARK_1000};
        
        //Gradients
        --gradient-100: ${({theme}) => theme.GRADIENTS.G_100};
        --gradient-200: ${({theme}) => theme.GRADIENTS.G_200};
        
        //Button Colors
        --bg-button: ${({theme}) => theme.TINTS.TOMATO_100};
        --bg-button-hover: ${({theme}) => theme.TINTS.TOMATO_200};
        --bg-button-disabled: ${({theme}) => theme.TINTS.TOMATO_400};

        //Text
        --tx-main: ${({theme}) => theme.LIGHT.LIGHT_100};
        --tx-sub: ${({theme}) => theme.LIGHT.LIGHT_300};
        --tx-secondary: ${({theme}) => theme.LIGHT.LIGHT_400};
        --tx-accent: ${({theme}) => theme.TINTS.CAKE_200};
        --tx-copyright: ${({theme}) => theme.LIGHT.LIGHT_200};
        --tx-input: ${({theme}) => theme.LIGHT.LIGHT_500};
        --tx-footer-logo: ${({theme}) => theme.LIGHT.LIGHT_700};
        
        //Container Colors
        --bg-main-container: ${({theme}) => theme.DARK.DARK_600};
        --bg-input-container: ${({theme}) => theme.DARK.DARK_900};
        --bg-ingredient: ${({theme}) => theme.LIGHT.LIGHT_600};
        --ct-outline: ${({theme}) => theme.TINTS.CAKE_100};
    }
    `