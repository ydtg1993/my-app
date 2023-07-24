import styled from 'styled-components';
import {NavigationTab} from "../navigation/style";
import {img_box} from "../../../resource";

export const TopPanel = styled.div`
    display:flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    padding:0 20px 0 20px;
`;

export const SearchInput = styled.input`
    background-color: #fefcfa;
    border-radius: 40px 0 0 40px;
    font-family: inherit;
    font-size: inherit;
    height: 32px;
    outline: 0;
    padding:0;
    position: relative;
    width: 100%;
    color:#888897;
    padding-left: 20px;
    padding-right: 20px;
    border: 2px solid #9b7eaa;
    width100%;
`;

export const SearchButton = styled.div`
    width:75px;
    height:32px;
    border: 2px solid #9b7eaa;
    border-radius: 0 40px 40px 0;
    background-color: #e3cbcb;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchIcon = styled(NavigationTab)`
    transform: scale(0.42);
    background-position: -94px -10px;
`;

export const ComicInfoBox = styled.div`
    display:flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding:3px 0 3px 0;
    border-radius:3px;
    margin-bottom:5px;
    background: #d0c16f82;
`;

export const CoverPart = styled.div`
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 3/4;
    width:24%;
    box-shadow: rgba(0,0,0,0.2) 0px 4px 2px -2px, rgba(0,0,0,0.14) 0px 2px 2px 1px, rgba(0,0,0,0.12) 0px 2px 5px 1px;
    margin:0 3px 0 3px;
    
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
    flex:0.96;
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
`;

export const EmptyBox = styled.img.attrs({
    src:`${img_box}`
})`
        width:120px;
        margin: 10px auto;
        display: flex;
`;