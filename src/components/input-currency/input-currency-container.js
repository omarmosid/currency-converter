import React from 'react'
import styled from 'styled-components'
import Input from '../reusable/input/input'
import Label from '../reusable/label/label'
import CurrencySelect from '../reusable/currency-select/currency-select'

const StyledInputCurrencyContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  .field {
    margin-bottom: 14px;
  }
`

const InputCurrencyContainer = ({
  inputCurrency,
  handleInputCurrencyChange,
  inputValue,
  handleInputValueChange
}) => {
  return (
    <StyledInputCurrencyContainer>
      <div className="field">
        <Label>Enter your Input currency</Label>
        <CurrencySelect 
          value={inputCurrency}
          onChange={(e) => {handleInputCurrencyChange(e)}}
        />
      </div>
      <div className="field">
        <Label>Enter your Input value</Label>
        <Input
          name="input_curr"
          type="number"
          value={inputValue}
          onChange={(e) => {handleInputValueChange(e)}}
        />
      </div>
    </StyledInputCurrencyContainer>
  )
}

InputCurrencyContainer.defaultProps = {

}

export default InputCurrencyContainer