import React, { Component } from 'react';

{/* Displays a single question */}
class QuestionItem extends Component {
    renderTextQuestion(question) {
        if(this.props.editMode) {
            return (
                <div >
                    <input type="text" id={'question-'+this.props.question.id} value={this.props.question.name} onChange='' />
                    <input type="text" id={'question-'+question.id} disabled='true' placeholder='Short Text Answer' />
                </div>
            );
        }
        else {
            return (            
                <div>
                    <label htmlFor={'question-'+question.id}>{question.name}</label>
                    <input type="text" id={'question-'+question.id} />
                </div>
            );
        }        
    }

    renderNumberQuestion(question) {
        if(this.props.editMode) {
            return (
                <div >
                    <input type="text" id={'question-'+this.props.question.id} value={this.props.question.name} onChange='' />
                    <input type="number" id={'question-'+question.id} disabled='true' placeholder='Numeric Answer' />
                </div>
            );
        }
        else {
            return (            
                <div>
                    <label htmlFor={'question-'+question.id}>{question.name}</label>
                    <input type="number" id={'question-'+question.id} />
                </div>
            );
        }
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