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
    justify-content: space-between;
`;

export const ComicBox = styled.div`
    width:32%;
    height:185px;
    background-color: rgb(255 255 255 / 64%);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    margin-top:5px;
    display:flex;
    flex-wrap: wrap;
    
    & > .imgBox{
        border-radius: 3px;
        width:100%;
        height:161px;
        overflow: hidden;
        position: relative;
        width: 100%;
    }
    
    & > .imgBox img {
        width: 100%;
    }
    
    & > .title{
        font-size:12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-weight: 400;
        width: 100%;
    }
`;