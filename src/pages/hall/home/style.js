import styled from 'styled-components';
import {HallStruct} from "../../style";

export const MainStruct = styled(HallStruct)`
    grid-template-rows:55px auto 60px;
`;

export const SeriesLabel = styled.div`
    display:flex;
    & > h2{
        margin:0;
        width:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        font-size:16px;
        color:#1d1d1f;      
    }
    & > h2::after{
        content: "";
        display:block;
        width: 30%;
        height:1px;
        background-color: #ccc;
    }
`;

export const SeriesList = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom:14px;
`;

export const TopTitle = styled.div`
     & > h1 {
        margin:0;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #444379;
    }
    & > h1 > img{
        width:42px;
    }
    
    & > span{
        font-size: 12px;
        display: flex;
        justify-content: center;
        width: 100%;
        color: rgba(0, 0, 0, 0.65);
    }
`;
