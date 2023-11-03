import styled, { keyframes } from 'styled-components';
import {svg_loading} from "../../../resource";
import {ScrollType} from "../../style";

export const Section = styled(ScrollType)`
   padding: 0;
   display: flex;
   flex-direction: column;
   &>div:first-child{
        flex:1;
   }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.img.attrs({
    src:`${svg_loading}`
})`
  width: 64px; 
  height: 64px;
  animation: ${rotateAnimation} 1.5s infinite linear;
`;

export const LoadingSection = styled.div`
  display:flex;
  width:100%;
  justify-content:center
`;


