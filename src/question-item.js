import React, { Component } from 'react';

{/* Displays a single question */}
class QuestionItem extends Component {
    constructor(props) {
        super(props);
        this.questionTypes = [
            'text',
            'number'
        ];

        this.questionNames = {
            'text': 'Short Answer',
            'number': 'Number'
        }
    }

    getQuestionTypeOptions() {
        const questionTypeOptions = this.questionTypes.map((type) => 
            <option key={type} value={type}>{this.questionNames[type]}</option>
        );

        return (questionTypeOptions);
    }


    renderTextQuestion(question) {
        if(this.props.editMode) {
            return (
                <div onClick={this.props.onActiveQuestionClick} className={"p-2 m-2 border border-primary rounded "+((question.id == this.props.currentQuestionId)?"active-question": "")} >
                    <div className="form-row">
                        <div className="col-7 m-1">
                            <input 
                                type="text" 
                                id={'question-'+question.id}
                                value={question.name} 
                                onChange={this.props.onQuestionNameChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-4 m-1">
                            <select 
                                value={question.questionType}
                                onChange={this.props.onQuestionTypeChange}
                                id={"inputType-"+question.id} 
                                className="form-control" >
                                    {this.getQuestionTypeOptions()}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-7 m-1">
                            <input 
                                type="text" 
                                id={'question-'+question.id} 
                                disabled='true' 
                                placeholder='Short Text Answer' 
                                className="form-control"
                            />
                        </div>
                    </div>
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
                <div onClick={this.props.onActiveQuestionClick} className={"p-2 m-2 border border-primary rounded "+((question.id == this.props.currentQuestionId)?"active-question": "")} >
                    <div className="form-row">
                        <div className="col-7 m-1">
                            <input 
                                type="text" 
                                id={'question-'+question.id}
                                value={question.name} 
                                onChange={this.props.onQuestionNameChange}
                                className="form-control"
                            />
                        </div>
                        <div className="col-4 m-1">
                            <select 
                                value={question.questionType}
                                onChange={this.props.onQuestionTypeChange}
                                id={"inputType-"+question.id} 
                                className="form-control" >
                                    {this.getQuestionTypeOptions()}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-7 m-1">
                            <input 
                                type="number" 
                                id={'question-'+question.id} 
                                disabled='true' 
                                placeholder='Short Number Answer' 
                                className="form-control"
                            />
                        </div>
                    </div>
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