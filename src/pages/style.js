import styled from 'styled-components';
import {dog_sleep} from "../resource";

export const ScrollType = styled.div`
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

export const HallStruct = styled.div`
    height: 100%;  
    width: 100%;
    position: absolute;  
    top: 0px;  
    bottom: 0px;   
    background-size: cover;
    overflow:hidden;
    display: grid;
    grid-template-rows: auto 60px;
    grid-template-columns:100%;
    background: #faefde;
 
    @media (min-width: 1024px) {
        width: 1024px;
    }
`;

export const DetailStruct = styled.div`
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

export const ComicBox = styled.div`
    width:32%;
    background-color: rgb(255 255 255 / 64%);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    margin-top:5px;
    display:flex;
    flex-wrap: wrap;
    
    & > a {
        display: contents;
    }
    
    & .imgBox{
        border-radius: 3px 3px 0 0;
        overflow: hidden;
        position: relative;
        width: 100%;
        aspect-ratio: 3/4;
        background-color:white;
        background-image: url(${dog_sleep});
        background-repeat: no-repeat;
        background-position: center center; 
    }
    
    & .imgBox > span {
        height: 100%;
    }
    
    & .imgBox img {
        width: 100%;
    }
    
    & .titleBox{
        overflow: hidden;
        width: 100%;
        height:22px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    & .titleBox > span{
        font-weight: 400;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    @media (max-width: 320px) {
        width:48%;
    }
    
    @media (min-width: 760px) {
        width:16.3%;
    }
`;

export const ComicInfoBox = styled.div`
    display:flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding:3px 0 3px 0;
    border-radius:3px;
    margin-bottom:5px;
    background: #dbcb7263;
`;

export const CoverPart = styled.div`
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 3/4;
    width:24%;
    box-shadow: rgba(0,0,0,0.2) 0px 4px 2px -2px, rgba(0,0,0,0.14) 0px 2px 2px 1px, rgba(0,0,0,0.12) 0px 2px 5px 1px;
    margin:0 3px 0 3px;
    background-color:white;
    background-image: url(${dog_sleep});
    background-repeat: no-repeat;
    background-position: center center;
    
    & img {
        width: 100%;
    }
    
    @media (min-width: 540px) {
        width:17%;
    }
    
    @media (min-width: 1024px) {
        width:12%;
    }
`;

export const InfoPart = styled.ul`
    flex:1;
    color:white;
    font-size:12px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    
    & > li {
        margin:0 0 5px 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;   
    }
    
    & > li.btn {
        text-align:right;
        margin:0 0 0 5px;
    }
    
    & > li.title{
        font-size: 14px;
        font-weight:600;
        color: #444444;
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
        background: rgb(42 55 150 / 65%);
        display: inline-flex;
        border-radius: 2px;
        align-items: center;
        justify-content: center;
    }
    
    & > li > .description{
        overflow-y: scroll;
        height: 60px;
        white-space: normal;
        color: #1c006f;
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
    }
`;

