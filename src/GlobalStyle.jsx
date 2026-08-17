import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
 
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-family: "Helvetica", "Arial";
}

html{
    font-size: 62.5%;      
     //WHY ? 👆📗🔖L3: 
     // 1st Reason : when i write 1 rem then it become 10px ho jae is liye font-size ko 62.5% kiya SEE-> 16px * 62.5% = 10px so to use rem and its calculation become easy.
     // 2nd Reason : now if client say increase fontsize 10% then hundreads place pr chnage krna padta so now just one place change.
    overflow-x: hidden;
}

body{
   overflow-x: hidden;
}

.container{
  // border: 2px solid red;
  max-width: 120rem; 
  margin: 0 auto;
}


//👇📗🔖L4 : WHY h1, h2, h3 and p font-size and colors set already ?? now if client say increase font-size 10% then hundreads palce pr chnage krna padta so now just one place change.now just chnage h1, h2, h3 and p
h1{
   color: ${({ theme }) => theme.colors.heading};
   font-size: 6rem;
   font-weight: 900;
}

h2{
  color: ${({ theme }) => theme.colors.heading};
  font-size: 4.4rem;
  font-weight: 300;

  white-space: normal;
  text-align: center;  
}

h3{
   font-size: 2rem;
   font-weight: 600;
}

p{
  // color: ${({ theme }) => theme.colors.text};
   color: gray;
   font-size: 1.65rem;
   font-weight: 400;
   line-height: 1.5;
   margin-top: 1rem; 
}

a{
  text-decoration: none;
}

.grid{
  display: grid;
  gap: 9rem; 
}

// .grid div{
//   border: 2px solid yellowgreen;
// }

.grid-two-column{
  grid-template-columns: repeat(2, 1fr);
  
}

.grid-three-column{
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
  grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

.common-heading{
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
}

input, textarea {
  max-width: 50rem;
  color: ${({theme})=> theme.colors.black};
  padding: 1.6rem 2.4rem;
  border: 1px solid ${({theme})=> theme.colors.border};
  text-transform: uppercase;
  box-shadow: ${({theme})=> theme.colors.shadowSupport};
}
  
input[type="submit"]{
 max-width: 16rem;
 margin-top: 2rem;
 background-color: ${({theme})=> theme.colors.btn};
 color: ${({theme})=> theme.colors.white};
 padding: 1.4rem 2.2rem;
 border-style: solid;
 border-width: .1rem;
 text-transform: uppercase;
 font-size: 1.8rem;
 cursor: pointer;
}

::-webkit-scrollbar{
  width: 1.1rem;
}

::-webkit-scrollbar-track{
  background-color: rgba(97, 84, 243, 0.3);
  // border-radius: 1rem;   
}

::-webkit-scrollbar-thumb{
  background: rgb(98 84 243); 
  border-radius: 1rem;   
}

/* =================================================================
               Responsive 
====================================================================*/


@media (max-width: 768px) {

  html{
     font-size: 50%;
  }

  .container{
    padding: 3.2rem;
  }

  .grid-three-column{
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid{
    gap: 3.2rem;
  }
  
  .grid-two-column, .grid-four-column{
    grid-template-columns: 1fr;
  }

  .grid-two-column{
    
    justify-items: stretch;

  }
  
  
}

`;
