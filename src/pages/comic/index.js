import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import {BackIcon,HomeIcon, BodyWrapper, TitleBox, TopPanel} from './style';
import {Link, useHistory} from 'react-router-dom';

const Comic = (props) => {
    useEffect(() => {

    }, []);

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <BodyWrapper>
            <TopPanel>
                <BackIcon onClick={handleGoBack} />
                <TitleBox><span>ccc</span></TitleBox>
                <Link to="/"><HomeIcon/></Link>
            </TopPanel>
        </BodyWrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(null, mapDispatchToProps)(Comic);
