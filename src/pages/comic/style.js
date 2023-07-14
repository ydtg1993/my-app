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
    display: flex;
    flex-direction: column;
    background: #faefde;
 
    @media (min-width: 1024px) {
        width: 1024px;
    }
`;

export const TopPanel = styled.div`
    display:flex;
    height: 40px;
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
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding:5px 0 5px 0;
    background-repeat: no-repeat;
    background: -webkit-linear-gradient(60deg,rgb(46 73 160 / 80%),transparent),-webkit-radial-gradient(91% 89%,ellipse closest-corner,rgb(146 17 87 / 40%),transparent 280%),-webkit-radial-gradient(left center,ellipse farthest-side,rgb(255 245 222 / 80%) 0%,transparent 100%),-webkit-radial-gradient(10% 90%,ellipse closest-corner,rgb(222 255 165 / 80%) 0%,transparent 100%),-webkit-radial-gradient(center right,ellipse cover,rgb(255 226 180),transparent),-webkit-radial-gradient(10% 10%,circle farthest-side,rgb(54 72 42 / 50%),transparent),-webkit-linear-gradient(140deg,rgb(40 176 180 / 90%),transparent),-webkit-radial-gradient(rgb(228 58 58 / 90%),transparent);
`;

export const CoverPart = styled.div`
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 3/4;
    width:35%;
    box-shadow: rgba(0,0,0,0.2) 0px 4px 2px -2px, rgba(0,0,0,0.14) 0px 2px 2px 1px, rgba(0,0,0,0.12) 0px 2px 5px 1px;
    margin:0 5px 0 5px;
    
    & img {
        width: 100%;
    }
    
    @media (min-width: 540px) {
        width:26%;
    }
    
    @media (min-width: 1024px) {
        width:16%;
    }
`;

export const InfoPart = styled.ul`
    flex:0.96;
    list-style-type: none;
    color:white;
    font-size:12px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    
    & > li {
        margin:5px 0 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;   
    }
    
    & > li.title{
        font-size: 14px;
        color: #ffebd1;
    }
    
    & > li > label{
        padding: 2px;
        background: #151515eb;
        display: inline-flex;
        border-radius: 2px;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
    }
    
    & > li > .tag{
        padding: 2px;
        margin-right: 4px;
        background: rgb(146 17 87 / 40%);
        display: inline-flex;
        border-radius: 2px;
        align-items: center;
        justify-content: center;
    }
    
     & > li > .description{
        overflow-y: scroll;
        height: 60px;
        white-space: normal;
    }
`;

export const ChapterBox = styled.div`
    margin:3px;
    border-radius: 5px;
    height: 100%;
    background:#ffe2b4;
`;
