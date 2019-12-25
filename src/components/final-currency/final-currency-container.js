import React from 'react'
import styled from 'styled-components'
import { convertCurrency } from '../../utils/calculators'

const StyledFinalCurrencyContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 30px;
  div.container__output {
    margin-top: 10px;
    span {
      display: block;
      font-weight: bold;
      font-size: 36px;
    }
    span.container__output--input {
      font-size: 16px;
    }
    span.container__output--number {
      color: #fff;
      font-size: 48px;
    }
  }
`

const FinalCurrencyContainer = ({
  inputCurrency,
  inputValue,
  outputCurrency
}) => {
  return (
    <StyledFinalCurrencyContainer>
      <div className="container__output">
        <span className="container__output--input">{inputValue} {inputCurrency} equals</span>
        <span className="container__output--number">{convertCurrency(inputCurrency, inputValue, outputCurrency)}</span>
        <span className="container__output--currency">{outputCurrency}</span>
      </div>
    </StyledFinalCurrencyContainer>
  )
}

FinalCurrencyContainer.defaultProps = {

}

export default FinalCurrencyContainer