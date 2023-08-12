import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
/*component*/
import NavComponent from '../navigation'
import BodyComponent from "../body";
import {HallStruct} from "../../style";
import {SetCurrentPosition} from "../store/actions";
import {GetReadHistoryList} from "./store/actions";
import {LazyLoadImage} from "react-lazy-load-image-component";
import gif_finn from "../../../resource/pics/finn.gif";
import {useHistory} from "react-router-dom";
import {ComicInfoBox, CoverPart} from '../../style';
import {Section, InfoPart,EmptyBox} from "./style";
import Button from '@mui/material/Button';

const IBook = (props) => {
    const {readHistoryList,getReadHistory, setCurrentPosition } = props;

    useEffect(() => {
        setCurrentPosition('ibook');
        getReadHistory();
    }, [getReadHistory,setCurrentPosition]);

    const history = useHistory();
    const handleComicClick = (comicId) => {
        history.push(`/comic/${comicId}`);
    };

    const handleChapterClick = (comicId,chapterId) => {
        history.push(`/comic/${comicId}/${chapterId}`);
    };

    const loadedContent = () => {
        if(readHistoryList.size === 0)return (<EmptyBox/>);

        return (<>
            {readHistoryList.map((record) => (
                <React.Fragment key={record.comic_id}>
                    <ComicInfoBox>
                        <CoverPart onClick={() => handleComicClick(record.comic_id)}>
                            <LazyLoadImage src={record.comic_cover} alt={record.comic_title} effect="blur"
                                           placeholderSrc={gif_finn}/>
                        </CoverPart>
                        <InfoPart>
                            <li className={"title"}>{record.comic_title}</li>
                            <li><label>作 者</label><span style={{color:'black'}}>{record.comic_author}</span></li>
                            <li><label>书 签</label><span style={{color:'#1b73c0'}}>{record.chapter_title}</span></li>
                            <li><label>时 间</label><span style={{color:'#1b73c0'}}>{record.time}</span></li>
                            <li className={"btn"}>
                                <Button style={{background:'#feea9b',marginRight:'5px'}}
                                        variant="outlined" size="small" href="#contained-buttons"
                                        onClick={() => handleChapterClick(record.comic_id,record.chapter_id)}>
                                    <span>继续阅读</span>
                                </Button>
                            </li>
                        </InfoPart>
                    </ComicInfoBox>
                </React.Fragment>
            ))}
        </>);
    };

    return (
        <HallStruct>
            <Section>
                {loadedContent()}
            </Section>
            <NavComponent />
        </HallStruct>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getReadHistory:async ()=>{
            await dispatch(GetReadHistoryList());
        },
        setCurrentPosition: (position) => dispatch(SetCurrentPosition(position)),
    };
};

const mapStateToProps = (state) => {
    return {
        readHistoryList: state.iBook.get('readHistoryList'),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IBook);