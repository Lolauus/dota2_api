import { createGlobalStyle } from "styled-components";
import img from "./img/Rubick_Trailer.jpg";

export const GlobalStyle = createGlobalStyle`

    body{
        background-image: url(${img});
        background-color: #e8a200;
        background-attachment: fixed;
        background-size: cover;
    }
`;
