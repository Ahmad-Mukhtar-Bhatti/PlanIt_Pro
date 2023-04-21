import styled from 'styled-components'
// import { colors } from '../../styles/global'

import { initialState } from '../../Store/sliceConfig'

const { background1, background2, glassColor, color, opacity } = initialState
const colors = {
  background: `linear-gradient(220deg, ${background1} 10%, ${background2} 90%) fixed`,
  glass: 'rgba(' + parseInt(glassColor.slice(-6, -4), 16) + ',' + parseInt(glassColor.slice(-4, -2), 16) + ',' + parseInt(glassColor.slice(-2), 16) + ',' + opacity + '%' + ')',
  color: color
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;

  height: 60px;
  text-align: center;
  background: ${colors.glass};
  padding: 4px 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  
  button {
    width: 100%;
    max-width: 380px;
    padding: 10px 0;
    background: ${colors.background};
    border: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }

  button:last-child {
    width: 60px;
  }

  p {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  }
`