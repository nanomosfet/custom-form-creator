import React, { Component } from 'react';

{/* Displays a single question */}
class QuestionItem extends Component {
    constructor(props) {
        super(props);
        this.questionTypes = [
            'text',
            'number',
            'dropdown'
        ];

        this.questionNames = {
            'text': 'Short Answer',
            'number': 'Number',
            'dropdown': 'Dropdown'
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
                        <div className="col-6">
                            <input 
                                type="text" 
                                id={'question-'+question.id}
                                value={question.name} 
                                onChange={this.props.onQuestionNameChange}
                                className="form-control  m-1"
                            />
                        </div>
                        <div className="col-3 offset-3">
                            <select 
                                value={question.questionType}
                                onChange={this.props.onQuestionTypeChange}
                                id={"inputType-"+question.id} 
                                className="form-control float-right  m-1" >
                                    {this.getQuestionTypeOptions()}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <input 
                                type="text" 
                                id={'question-'+question.id} 
                                disabled='true' 
                                placeholder='Short Text Answer' 
                                className="form-control m-1"
                            />
                        </div>
                        <div className="col-3 offset-3">
                            <button 
                                type="button" 
                                className="btn btn-danger btn-sm float-right  m-1"
                                onClick={this.props.onQuestionRemoveClick}
                            >
                                &times;
                            </button>
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
                        <div className="col-6">
                            <input 
                                type="text" 
                                id={'question-'+question.id}
                                value={question.name} 
                                onChange={this.props.onQuestionNameChange}
                                className="form-control  m-1"
                            />
                        </div>
                        <div className="col-3 offset-3">
                            <select 
                                value={question.questionType}
                                onChange={this.props.onQuestionTypeChange}
                                id={"inputType-"+question.id} 
                                className="form-control float-right  m-1" >
                                    {this.getQuestionTypeOptions()}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <input 
                                type="number" 
                                id={'question-'+question.id} 
                                disabled='true' 
                                placeholder='Number Answer' 
                                className="form-control m-1"
                            />
                        </div>
                        <div className="col-3 offset-3">
                            <button 
                                type="button" 
                                className="btn btn-danger btn-sm float-right  m-1"
                                onClick={this.props.onQuestionRemoveClick}
                            >
                                &times;
                            </button>
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

    renderDropdownQuestion(question) {
        const getDropdownOptions = question.options.map((option, index) => 
            <li key={option} className="list-group-item">
                <div className="input-group">
                    <span
                        className="input-group-addon"
                    >
                        {(index+1).toString()+'.'}
                    </span>
                    <input 
                        type="text"
                        placeholder={option}
                        className="form-control"
                    />
                </div>
            </li>
        );
        if(this.props.editMode) {
            return (
                <div onClick={this.props.onActiveQuestionClick} className={"p-2 m-2 border border-primary rounded "+((question.id == this.props.currentQuestionId)?"active-question": "")} >
                    <div className="form-row">
                        <div className="col-6">
                            <input 
                                type="text" 
                                id={'question-'+question.id}
                                value={question.name} 
                                onChange={this.props.onQuestionNameChange}
                                className="form-control  m-1"
                            />
                        </div>
                        <div className="col-3 offset-3">
                            <select 
                                value={question.questionType}
                                onChange={this.props.onQuestionTypeChange}
                                id={"inputType-"+question.id} 
                                className="form-control float-right  m-1" >
                                    {this.getQuestionTypeOptions()}
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <ol                                
                                className="list-group m-1"
                            >
                                {getDropdownOptions}
                            </ol>
                        </div>
                        <div className="col-3 offset-3">
                            <button 
                                type="button" 
                                className="btn btn-danger btn-sm float-right m-1"
                                onClick={this.props.onQuestionRemoveClick}
                            >
                                &times;
                            </button>
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
            case 'dropdown':
                return this.renderDropdownQuestion(question);
                break;
        }
    }
}

export default QuestionItem;