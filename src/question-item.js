import React, { Component } from 'react';

{/* Displays a single question */}
class QuestionItem extends Component {
    renderTextQuestion(question) {
        return (
            <div>
                <label htmlFor={'question-'+question.id}>{question.name}</label>
                <input type="text" id={'question-'+question.id} />
            </div>
        );
    }

    renderNumberQuestion(question) {
        return (
            <div>
                <label htmlFor={'question-'+question.id}>{question.name}</label>
                <input type="number" id={'question-'+question.id} />
            </div>
        );
    }
    render() {
        const question = this.props.question;
        switch(question.questionType) {
            case 'text':
                return this.renderTextQuestion(question);
                break;
            case 'number':
                return this.renderNumberQuestion(question);
                break;
        }
    }
}

export default QuestionItem;