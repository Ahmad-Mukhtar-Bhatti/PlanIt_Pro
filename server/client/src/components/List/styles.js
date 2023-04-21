import styled from "styled-components";
// import { colors } from "../../styles/global";
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
  justify-content: space-between;

  height: fit-content;
  min-height: calc(100vh - 80px);
  max-height: fit-content;
  width: calc((100% / 3) - 20px);
  min-width: 270px;
  max-width: 500px;
  background: ${colors.glass};
  border-radius: 15px;

  @media (max-width: 900px) {
    width: calc((100% / 2) - 10px);
  }
  
  @media (max-width: 640px) {
    width: 90%;
  }
  
  @media (max-width: 432px) {
    width: 380px;
  }
  
  header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    text-transform: uppercase;
    
    border-radius: 15px 15px 0 0;
    background: ${colors.background};
  }
  
 ul {
    height: 100%;
    min-height: calc(100vh - 80px - 64px);

    button {
      background: none;
      border-radius: 0;
    }
    
    &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #fff5;
    }
  }
  
  footer {
    height: 10px;
    border-radius: 0 0 15px 15px;
    background: ${colors.background};
  }
`