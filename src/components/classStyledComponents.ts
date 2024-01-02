import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Geist';
    src: url('app/assets/fonts/Geist-Regular') format('otf');
    font-weight: normal;
    font-style: normal;
  }
`;
export const StarterDiv = styled.div`
font-family: 'Geist', Helvetica, Arial, sans-serif;
font-size: 16px;
line-height: 24px;
font-weight: 400;
display: flex;
justify-content: space-around;
overflow: hidden;
color: #f6f6f6;
background-color: #2f2f2f;
height: 88vh;
padding-top: 12vh;
font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
div{
  width: 100%;
}

h2{
 position:fixed;
 margin-top:-2%;
}
flex-wrap: wrap;
  `
  
export const Title = styled.h1`
font-size: 2em;
text-align: center;
margin-bottom: 20px;
`;

export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
gap: 0;
margin: 5px;
padding: 0;
overflow: hidden;
color: #f6f6f6;
background-color: #2f2f2f;
height: 70vh;
font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
div{
  width: 100%;
}
#Healing,
#Damage,
#Tank{
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 45%;
  border: 1px solid #f6f6f6;
  background-color: #202020;
  padding: 10px;
  border-radius: 10px;
  div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    height:30px;
    input{
      width: 10%;
    }
  }
}
#Tank{
  width: 90%;
  height:25%;
}
h2{
 position:fixed;
 margin-top:-2%;
}
flex-wrap: wrap;
`;

export const Selector = styled.select`
  width: 200px;
  padding: 6px 20px;
  height: 2rem;
  border-radius: 5px;
  position: fixed;
  margin-top:3%;
  background-color: #202020;
  color: #f6f6f6;
  border: 1px solid #f6f6f6;
  font-size: 16px;
  cursor: pointer;
  `;


export const VocationDiv = styled.div`
  margin-top: 10vh;
  `
