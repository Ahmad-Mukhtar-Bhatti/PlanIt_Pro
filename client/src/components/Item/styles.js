import styled from 'styled-components'
// import { colors } from '../../styles/global'
import { initialState } from '../../Store/sliceConfig'

const { background1, background2, glassColor, color, opacity } = initialState

const colors = {
  background: `linear-gradient(220deg, ${background1} 10%, ${background2} 90%) fixed`,
  glass: 'rgba(' + parseInt(glassColor.slice(-6, -4), 16) + ',' + parseInt(glassColor.slice(-4, -2), 16) + ',' + parseInt(glassColor.slice(-2), 16) + ',' + opacity + '%' + ')',
  color: color
}

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 8px 8px;
  border-bottom: 2px ${colors.color + '40'} solid;
  cursor: grab;

  p {
    width: 100%; 
    font-size: 20px;
    font-weight: 500;
    padding-left: 10px;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 10px;

  button {
    height: 40px;
    width: 20px;
  }
`