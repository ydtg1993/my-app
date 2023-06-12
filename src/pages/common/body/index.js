import React from 'react';
import { Section } from './style';

const BodyComponent = ({ children}) => {
    console.log(children);
    return <Section>{children}</Section>;
};

export default BodyComponent;