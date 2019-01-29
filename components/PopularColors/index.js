import React from 'react';
import styled from 'styled-components';

const Color = styled.div`
background-color: ${props => props.myColor};
width: 100px;
height: 100px;
padding: 10px;
margin: 10px;
`;

const ColorGroup = styled.div`
display: flex;
flex-direction: row;
`;

const Caption = styled.span`
color: white;
display: inline-block;
`

class Index extends React.Component {
    constructor(props){
        super(props)

    this.state = {
        colors: [{
            hex: '#2196f3'
        },
        {
            hex: '#e91e63'
        },
        {
            hex: '#00bcd4'
        },
        {
            hex: '#9c27b0'
        },
        {
            hex: '#795548'
        }]
        }
    }



    render(){
        return (
            <ColorGroup>
                {this.state.colors.map(color => <Color myColor={color.hex} key={color.hex}><Caption>{color.hex}</Caption></Color>)}
            </ColorGroup>
            )
    }
}

export default Index;