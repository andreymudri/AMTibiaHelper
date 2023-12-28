

import styled from 'styled-components';

export const Title = styled.h1`
font-size: 2em;
text-align: center;
margin-bottom: 20px;
`;

export const Main = styled.main`
font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
font-size: 16px;
line-height: 24px;
font-weight: 400;
display: flex;
width: 100vw;
justify-content: space-around;
gap: 0;
margin: 0;
padding: 0;
overflow: hidden;
height:60vh;
color: #f6f6f6;
background-color: #2f2f2f;
height: 100vh;
font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

div{
  width: 100%;
}
#Healing,
#Damage{
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 100%;
  background-color: #202020;
  padding: 10px;
  border-radius: 10px;
  margin:5px;
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
`;

export const Selector = styled.select`
  width: 200px;
  padding: 6px 20px;
  height: 2rem;
  `;