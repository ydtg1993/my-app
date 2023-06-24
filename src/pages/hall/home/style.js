import styled from 'styled-components';

export const SeriesLabel = styled.div`
    display:flex;
    & > b{
      color:#1d1d1f  
    }
`;

export const SeriesList = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom:14px;
`;

export const ComicBox = styled.div`
    width:32%;
    max-width:125px;
    background-color: rgb(255 255 255 / 64%);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    margin-top:5px;
    display:flex;
    flex-wrap: wrap;
    
    & > .imgBox{
        border-radius: 3px 3px 0 0;
        overflow: hidden;
        position: relative;
        width: 100%;
        height:162px;
    }
    
    & > .imgBox img {
        width: 100%;
        max-height:162px;
    }
    
    & > .titleBox{
        overflow: hidden;
        width: 100%;
        height:22px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    & > .titleBox>span{
        font-weight: 400;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    @media (min-width: 1024px) {
        width:158px;
        max-width:158px;
        
        & > .imgBox{
            height: 211px;
        }
        
        & > .imgBox img {
            width: 100%;
            max-height:211px;
        }
    }
`;