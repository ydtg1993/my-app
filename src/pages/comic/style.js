import styled from 'styled-components';
import {img_back} from "../../resource";
import {NavigationTab} from "../hall/navigation/style";


export const TitleBox = styled.div`
    width: 0;
    flex-grow: 1;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > h1{
        margin:0;
        font-weight: 600;
        font-size: 14px;
    }
`;

export const TopNavPanel = styled.div`
    display:flex;
    height: 45px;
    align-items: center;
    justify-content: space-around;
    background:white;
    padding:0 10px 0 10px;
    
    & > a {
        display: flex;
        align-items: center;
        height: 32px;
        width:45px;
    }
`;

export const BackIcon = styled.img.attrs({
    src:`${img_back}`
})`
    width:24px;
    padding: 0 10px;
`;

export const HomeIcon = styled(NavigationTab)`
    transform: scale(0.48);
    background-position: -20px -10px;
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
    width:0;
    flex-grow: 1;
    color:white;
    font-size:12px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    
    & > li {
        margin:5px 5px 5px 0;  
    }
    
    & > li > h2{
        margin:0;
        font-weight: 500;
        font-size: 14px;
        color: #ffebd1;
    }
    
    & .btn{
        text-align: right;
    }
    
    & .btn>a{
        max-width:160px;
    }
`;

export const Label = styled.div`
    padding: 2px;
    background: #151515eb;
    display: inline-flex;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`;

export const Tag = styled(Label)`
    background: rgb(146 17 87 / 40%);
`;

export const Description = styled.div`
    height: 60px;
    white-space: normal;
`;

export const ChapterList = styled.div`
    margin:3px;
    border-radius: 5px;
    background:#ffe2b4;
    padding:7px;
    max-height:340px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
    & > div {
        padding:3px;
        overflow:hidden;
    }
    
    & button {
        width:100%;
        height:40px;
        background: #faefde;
        font-size: 14px;
        color: #000000;
        border: solid 1px #85c9f6;
        border-radius: 2px;
        align-items: center;
    } 
    
    & button> h3{
        margin:0;
        font-weight: 400;
        font-size: 14px;
    }
    
    @media (max-width: 540px) {
      grid-template-columns: 1fr;
      max-height:300px;
    }
    
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      max-height:420px;
    }
`;

export const SubTitle = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    padding:0 5px;
    margin-top:10px;
    &>span{
        font-size:15px;
        width:85px;
        text-align: center;
    }
    &::before,&::after{
        content: '';               
        width:0;
        flex-grow: 1;
        background: #85cbf8; 
        height: 1px;
    }
`;
