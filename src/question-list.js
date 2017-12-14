import React, { Component } from 'react';

import QuestionItem from './question-item.js';
class QuestionList extends Component {
    render() {

        const questions = this.props.sections[this.props.currentSectionId].questions.map((question) => 
            <QuestionItem 
                question={question}
                key={question.id}
            />
        );
       
        return (
            <div>
                <h4>{this.props.sections[this.props.currentSectionId].name}</h4>
                {questions}
            </div>
        );
    }
}

export default QuestionList;