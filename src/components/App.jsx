import React from 'react';
import './App.css';
import Header from './../components/header';
import Searchbox from '../components/Search';
import Resultcontainer from './Resultcontainer';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headertext: 'Name It !!!',
            headerExpanded: true,
            suggestedNames: [],

        };
    }
    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText > 0,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };



    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headtitle={this.state.headertext} />
                <Searchbox onInputChange={this.handleInputChange} />
                <Resultcontainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    };
}

export default App;