import styled from 'styled-components'

const Input = styled.input`
  box-sizing: border-box;
  height: 48px;
  width: 320px;
  padding: 0px 8px;
  background: #343434;
  color: #fff;
  border: 2px solid #888;
  border-radius: 2px;
  font-size: 18px;
  &:focus {
    outline: 2px solid yellow;
  }
`

export default Input