import React from 'react';
import Layout from '../layouts/Main';
import Container from '../components/Container'
import TopBar from '../components/TopBar'
import Input from '../components/Input'
import PopularColors from '../components/PopularColors'
import SelectedColors from '../components/SelectedColors'

class Homepage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedColors: []
        }
    }

    setColor(color){
        this.state.push({
            hex: color
        })
    }

    render(){
        return (
            <Layout>
                <TopBar heading="Color Picker" />
                <Container>
                    <Input setColor={this.setColor} />
                    <PopularColors />
                    <SelectedColors selectedColors={this.state.selectedColors}/>
                </Container>
            </Layout>
        )
    }
}

export default Homepage;
