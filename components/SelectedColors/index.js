import React from 'react';
import styled from 'styled-components';

class Index extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            this.props.selectedColors.map(color => <SelectedColor></SelectedColor>)
        )
    }
}

export default Index;