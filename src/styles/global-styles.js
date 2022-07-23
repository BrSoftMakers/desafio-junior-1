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
        background-color: #f6f8fa;
        font-family: ${theme.fonts.family.default};
    }
`;
