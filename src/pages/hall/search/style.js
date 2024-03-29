import styled from 'styled-components';
import {NavigationTab} from "../navigation/style";
import {dog_issue} from "../../../resource";

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

export const EmptyBox = styled.img.attrs({
    src:`${dog_issue}`
})`
        width:240px;
        margin: 30px auto;
        display: flex;
`;