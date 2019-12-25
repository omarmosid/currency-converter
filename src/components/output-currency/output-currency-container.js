import React from 'react'
import styled from 'styled-components'
import Label from '../reusable/label/label'
import CurrencySelect from '../reusable/currency-select/currency-select'

const StyledOutputCurrencyContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
`

const OutputCurrencyContainer = ({
  outputCurrency,
  handleOutputCurrencyChange
}) => {
  return (
    <StyledOutputCurrencyContainer>
      <div className="container__field">
        <Label>Enter your Output currency</Label>
        <CurrencySelect 
          value={outputCurrency}
          onChange={(e) => {handleOutputCurrencyChange(e)}}
        />
      </div>
    </StyledOutputCurrencyContainer>
  )
}

OutputCurrencyContainer.defaultProps = {

}

export default OutputCurrencyContainer