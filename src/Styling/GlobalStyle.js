import { createGlobalStyle } from "styled-components";
import img from "./Rubick_Trailer.jpg";
//För att stylea bodyn globalt

export const GlobalStyle = createGlobalStyle`

    body{
        background-image: url(${img});
        background-color: #e8a200;
    }
`;
