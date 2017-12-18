import React, { Component } from 'react';
import './question-item.scss';

import QuestionItem from './question-item.js';
class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.handleQuestionNameChange = this.handleQuestionNameChange.bind(this);
        this.handleQuestionTypeChange = this.handleQuestionTypeChange.bind(this);
        this.handleActiveQuestionClick = this.handleActiveQuestionClick.bind(this);
    }

    handleQuestionNameChange(sectionId, questionId, e) {
        this.props.onQuestionNameChange(sectionId, questionId, e.target.value);
    }

    handleQuestionTypeChange(sectionId, questionId, e) {
        this.props.onQuestionTypeChange(sectionId, questionId, e.target.value);
    }
    handleActiveQuestionClick(questionId) {
        this.props.onActiveQuestionClick(questionId);
    }
    render() {
        const questions = this.props.sections.find((section) => section.id == this.props.currentSectionId).questions.map((question) => 
            <QuestionItem 
                question={question}
                key={question.id}
                editMode={this.props.editMode}
                onQuestionNameChange={(e) => this.handleQuestionNameChange(this.props.currentSectionId, question.id, e)}
                onQuestionTypeChange={(e) => this.handleQuestionTypeChange(this.props.currentSectionId, question.id, e)}
                currentQuestionId={this.props.currentQuestionId}
                onActiveQuestionClick={(e) => this.handleActiveQuestionClick(question.id)}
            />
        );

        return (
            <div>
                <h4 className="text-center">{this.props.sections.find((section) => section.id == this.props.currentSectionId).name}</h4>
                {questions}
            </div>
        );
    }
}

export default QuestionList;