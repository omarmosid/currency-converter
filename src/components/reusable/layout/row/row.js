import styled from 'styled-components'

const Row = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.padding};
  max-width: ${props => props.fullwidth ? '100%' : '1000px'};
  height: ${props => props.height};
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: ${props => props.border};
`
Row.defaultProps = {
  fullwidth: false,
  padding: '20px',
  height: 'auto',
  border: 'none',
}

export default Row