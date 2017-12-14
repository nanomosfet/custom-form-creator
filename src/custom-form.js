import React, { Component } from 'react';

import SectionList from './section-list.js'
import QuestionList from './question-list.js'
{/* Displays all parts of the custom form creator */}
class CustomForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSectionId: 0
        };

        this.handleSectionItemClick = this.handleSectionItemClick.bind(this);
    }
    
    handleSectionItemClick(currentSectionId) {
        this.setState({
            currentSectionId: currentSectionId
        });
    }

    render() {
        return (
            <div>
                <SectionList 
                    currentSectionId={this.state.currentSectionId}
                    sections={this.props.sections}
                    onSectionItemClick={this.handleSectionItemClick}
                />
                <QuestionList 
                    currentSectionId={this.state.currentSectionId}
                    sections={this.props.sections}

                />
            </div>
        );
    }
}
export default CustomForm;