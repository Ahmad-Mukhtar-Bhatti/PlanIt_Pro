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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 5px;
  text-align: center;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    text-transform: uppercase;
    background: ${colors.background};
    border-radius: 15px 15px 0 0;
    padding: 20px;

    button {
      display: flex;
      background: none;
      border: none;
    }
  }

  footer {
    height: 10px;
    border-radius: 0 0 15px 15px;
    background: ${colors.background};
  }
`

export const Box = styled.div`
  max-width: 350px;
  width: 100%;
  border-radius: 15px;
`

export const Body = styled.div`
  background: ${colors.glass};
  padding: 30px 10px 20px;
  
  div{
    width: 100%;
  }
  
  input {
    font-size: 20px;
    padding: 0 20px;
    width: 100%;
    height: 50px;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  background: ${colors.glass};
  padding: 10px 10px 30px;

  button {
    text-transform: uppercase;
    padding: 8px 15px;
    font-size: 18px;
  }
`

