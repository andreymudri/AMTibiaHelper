import styled from 'styled-components';

export const Title = styled.h1`
font-size: 2em;
text-align: center;
margin-bottom: 20px;
`;

export const Main = styled.main`
display: flex;
width: 90vw;
justify-content: space-around;
gap: 0;
margin: 0;
padding: 0;
flex: 1 0 40%;
margin-bottom: 20px;
overflow: hidden;
height:60vh;
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
      height: 5px;
      margin: 5 10px;
      padding: 5 0px;
    }
  }
}
`;