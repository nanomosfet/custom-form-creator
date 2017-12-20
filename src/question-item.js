import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './item-types';

const questionSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    }
}

const questionTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        if (dragIndex === hoverIndex) {
            return;
        }

        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        const clientOffset = monitor.getClientOffset();

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }

        props.moveQuestion(dragIndex, hoverIndex);

        monitor.getItem().index = hoverIndex;
    }
}

{/* Displays a single question */}
@DropTarget(ItemTypes.QUESTION, questionTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
}))
@DragSource(ItemTypes.QUESTION, questionSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
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

    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        isDragging: PropTypes.bool.isRequired,
        id: PropTypes.any.isRequired,
        moveQuestion: PropTypes.func.isRequired,
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
                        <div className="col-3 offset-3 d-flex align-content-end">
                            <button
                                type="button"
                                className="btn btn-danger btn-sm ml-auto float-right mt-auto"
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
                        <div className="col-3 offset-3 d-flex align-content-end">
                            <button
                                type="button"
                                className="btn btn-danger btn-sm ml-auto float-right mt-auto"
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
            <li key={option.id} className="list-group-item">
                <div className="input-group">
                    <span
                        className="input-group-addon"
                    >
                        {(index+1).toString()+'.'}
                    </span>
                    <input
                        type="text"
                        value={option.option}
                        className="form-control"
                        onChange={(e) => this.props.onQuestionOptionChange(option.id, e)}
                    />
                     <span
                            onClick={(e) => this.props.onQuestionOptionRemoveClick(option.id, question.id)}
                            className="input-group-addon btn btn-danger"
                        >
                            &times;
                    </span>
                </div>
            </li>
        );

        const renderDropdownAddOption = (
            <li className="list-group-item">
                <div className="input-group">
                    <span
                        className="input-group-addon"
                    >
                        {(question.options.length + 1).toString() + '.'}
                    </span>
                    <input
                        type="text"
                        placeholder='New Option'
                        className="form-control"
                        onClick={this.props.onQuestionAddOptionClick}
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
                                {renderDropdownAddOption}
                            </ol>
                        </div>
                        <div className="col-3 offset-3 d-flex align-content-end">
                            <button
                                type="button"
                                className="btn btn-danger btn-sm ml-auto float-right mt-auto"
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

        const {
            isDragging,
            connectDragSource,
            connectDropTarget,
        } = this.props
        let questionEl = ''
        switch(question.questionType) {
            case 'text':
                questionEl = this.renderTextQuestion(question);
                break;
            case 'number':
                questionEl = this.renderNumberQuestion(question);
                break;
            case 'dropdown':
                questionEl = this.renderDropdownQuestion(question);
                break;
        }
        return connectDragSource(
            connectDropTarget(<div>{questionEl}</div>)
        )
    }
}

export default QuestionItem;