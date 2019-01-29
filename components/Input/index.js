import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width:100%;
  height: 60px;
  font-size: 18px;
`;

const Div = styled.div`
padding: 20px;
`;

class Index extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputColor: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitColor = this.submitColor.bind(this);
    }

    handleChange(event){
        this.setState({
            inputColor: event.target.value
        })
    }

    submitColor(e){
        e.preventDefault();
        this.props.setColor(this.state.inputColor)
    }

    render(){
        return (
            <Div>
                <form onSubmit={this.submitColor}>
                    <Input type="text" value={this.state.inputColor} onChange={this.handleChange}/>
                </form>
            </Div>)
    }
}



export default Index;