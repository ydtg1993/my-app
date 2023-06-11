import React from 'react';
import {
    Section,
    Block
} from './style';

class BodyComponent extends React.Component {
    render() {
        return (
            <Section>
                <Block>
                    <p>首页推荐</p>
                </Block>
            </Section>
        )
    }
}

export default BodyComponent