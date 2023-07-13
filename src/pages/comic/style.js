import styled from 'styled-components';
import {gif_finn, img_back} from "../../resource";

export const BodyWrapper = styled.div`
    height: 100%;  
    width: 100%;
    position: absolute;  
    top: 0px;  
    bottom: 0px;   
    background-size: cover;
    overflow:hidden;
    display: grid;
    grid-template-rows: 40px auto;
    grid-template-columns:100%;
    background: #faefde;
 
    @media (min-width: 1024px) {
        width: 1024px;
    }
`;

export const TopPanel = styled.div`
    display:flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    background:white;
    padding:0 10px 0 10px;
`;

export const ContentPanel = styled.div`
   overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
    
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0);
    }
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
  scrollbar-color: transparent;
`;

export const BackIcon = styled.img.attrs({
    src:`${img_back}`
})`
    width:24px;
`;

export const HomeIcon = styled.img.attrs({
    src:`${gif_finn}`
})`
    width:30px;
`;

export const TitleBox = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > span{
        font-weight: 400;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const ComicInfoBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 220px;
    background-repeat: no-repeat;
    background: -webkit-linear-gradient(60deg,rgb(46 73 160 / 80%),transparent),-webkit-radial-gradient(91% 89%,ellipse closest-corner,rgb(146 17 87 / 40%),transparent 280%),-webkit-radial-gradient(left center,ellipse farthest-side,rgb(255 245 222 / 80%) 0%,transparent 100%),-webkit-radial-gradient(10% 90%,ellipse closest-corner,rgb(222 255 165 / 80%) 0%,transparent 100%),-webkit-radial-gradient(center right,ellipse cover,rgb(255 226 180),transparent),-webkit-radial-gradient(10% 10%,circle farthest-side,rgb(54 72 42 / 50%),transparent),-webkit-linear-gradient(140deg,rgb(40 176 180 / 90%),transparent),-webkit-radial-gradient(rgb(228 58 58 / 90%),transparent);
`;

export const ChapterBox = styled.div`
    margin:3px;
    border-radius: 5px;
    height: 460px;
    background:#ffe2b4;
`;
