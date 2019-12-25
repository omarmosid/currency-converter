import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Row from './components/reusable/layout/row/row'
import InputCurrencyContainer from './components/input-currency/input-currency-container'
import OutputCurrencyContainer from './components/output-currency/output-currency-container'
import FinalCurrencyContainer from './components/final-currency/final-currency-container'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    background: #171717;
    color: #9D9D9D;
  }
`

const App = () => {
  const [inputCurrency, setInputCurrency] = useState('USD');
  const [inputValue, setInputValue] = useState(0);
  const [outputCurrency, setOutputCurrency] = useState('INR');

  const handleInputCurrencyChange = (e) => {
    setInputCurrency(e.target.value)
  }

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleOutputCurrencyChange = (e) => {
    setOutputCurrency(e.target.value)
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Row>
        <h1>Currency Converter</h1>
      </Row>
      <Row>
        <InputCurrencyContainer
          inputCurrency={inputCurrency}
          inputValue={inputValue}
          handleInputCurrencyChange={handleInputCurrencyChange}
          handleInputValueChange={handleInputValueChange}
        />
        <OutputCurrencyContainer
          outputCurrency={outputCurrency}
          handleOutputCurrencyChange={handleOutputCurrencyChange}
        />
        <FinalCurrencyContainer
          inputCurrency={inputCurrency}
          outputCurrency={outputCurrency}
          inputValue={inputValue}
        />
      </Row>
    </React.Fragment>
  )
}

export default App