import styled from 'styled-components';
import {ScrollType} from "../../style";
import {InfoPart as Info} from "../../style";

export const Section = styled(ScrollType)`
   padding: 5px;
`;

export const InfoPart = styled(Info)`
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