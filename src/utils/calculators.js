const currencies = {
  USD: 1,
  CAD: 1.32,
  INR: 71.21
}

export const convertCurrency = (inputCurr, inputValue, outputCurr) => {
  let outputValue = 0;
  if(inputCurr !== 'USD') {
    outputValue = inputValue/currencies[inputCurr] * currencies[outputCurr];
  } else {
    outputValue = currencies[outputCurr] * inputValue;
  }
  return roundTo(outputValue);
}

export const roundTo = (value, decimalplaces = 2) => {
  let roundedValue = Math.round(value * 100) / 100;
  return roundedValue;
}