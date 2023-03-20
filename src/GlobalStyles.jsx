import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{

    //headings
    --fs-h1:clamp(36px, 7vw, 40px);
    --fs-h2:clamp(32px, 7vw, 36px);
    --fs-h3:clamp(24px, 7vw, 32px);
    --fs-h4:clamp(16px, 7vw, 24px);

    --fw-h1:900;
    --fw-h1:700;
    --fw-h1:600;
    --fw-h1:600;


    //span and p

    --fs-p:clamp(14px, 7vw, 16px);
    --fs-span:clamp(12px, 5vw, 18px);
   
    --fw-p:500;
    --fw-span:600; 
   

}

h1{
    font-size:var(--fs-h1);
    font-weight:var(--fw-h1);
}
h2{
    font-size:var(--fs-h2);
    font-weight:var(--fw-h2);
}
h3{
    font-size:var(--fs-h3);
    font-weight:var(--fw-h3);
}
h4{
    font-size:var(--fs-h4);
    font-weight:var(--fw-h4);
}
p{
    font-size:var(--fs-p);
    font-weight:var(--fw-p);
}
span{
    font-size:var(--fs-span);
    font-weight:var(--fw-span);
}



//css reset    
*{margin:0;
padding:0;
box-sizing:border-box;
font-family: 'Inter', sans-serif,Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}




`;

export default GlobalStyles;
