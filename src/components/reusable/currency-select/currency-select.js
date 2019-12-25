import React from 'react'
import styled from 'styled-components'

const StyledCurrencySelect = styled.select`
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

const CurrencySelect = (props) => {
  return (
    <StyledCurrencySelect
      {...props}
    >
      <option value="USD">US Dollars</option>
      <option value="CAD">Canadian Dollars</option>
      <option value="INR">Indian Rupees</option>
    </StyledCurrencySelect>
  )
}

CurrencySelect.defaultProps = {

}

export default CurrencySelect