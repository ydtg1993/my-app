import React from 'react';
import {
    Section,
    Block
} from './style';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

class BodyComponent extends React.Component {
    render() {
        return (
            <Section>
                <Skeleton width={150}/>
                <Skeleton variant="rect" height={240} />
                <Skeleton width={150}/>
                <Skeleton variant="rect" height={240} />
            </Section>
        )
    }
}

export default BodyComponent