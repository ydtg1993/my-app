import styled from 'styled-components';
import {gif_finn} from '../../../resource';

export const SeriesLabel = styled.div`
    display:flex;
    & > b{
      color:#1d1d1f  
    }
`;

export const SeriesList = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom:14px;
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
        background-image: url(${gif_finn});
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