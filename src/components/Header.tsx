import styled from 'styled-components'

export function Header() {
  return (
    <TopHeader>
      <h1>Tibia Helper</h1>
    </TopHeader>
  )
}

const TopHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position:fixed;
  top:0;
  width: 100%;
  background-color: #202020;
  border: 1px solid #000;
`