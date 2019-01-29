import React from 'react';
import styled from 'styled-components'

const Heading = styled.h1`
color: rebeccapurple;
font-size: 36px;
text-align: center;
`;

class Index extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (<Heading>{this.props.heading}</Heading>)
    }
}

export default Index;