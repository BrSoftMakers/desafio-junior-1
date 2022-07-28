import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

// Global styles
export const GlobalStyles = createGlobalStyle`
    /* reset css */
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${theme.colors.bgColor};
        font-family: ${theme.fonts.family.default};
    }
`;
