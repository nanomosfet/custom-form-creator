import React, { Component } from 'react';

import SectionList from './section-list.js'
import QuestionList from './question-list.js'
{/* Displays all parts of the custom form creator */}
class CustomForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    id: 0,
                    name: "Appointment Setup",
                    questions: [
                        {
                            id: 0,
                            name: "Patient Name",
                            questionType: "text"
                        },
                        {
                            id: 1,
                            name: "Patient Age",
                            questionType: "number"
                        },
                    ]
                },
                {
                    id: 1,
                    name: "Appointment Request",
                    questions: [
                        {
                            id: 2,
                            name: "Patient Name",
                            questionType: "text",
                        },
                        {
                            id: 3,
                            name: "Patient Age",
                            questionType: "number"
                        }
                    ]
                }
            ],
            editMode: 1,
            lastSectionId: 1,
            lastQuestionId: 3,
            currentSectionId: 0,
            currentQuestionId: 0
        }
        // These bindings are necessary to make `this` work in the callback
        this.handleAddSectionClick = this.handleAddSectionClick.bind(this);
        this.handleSectionNameChange = this.handleSectionNameChange.bind(this);
        this.handleRemoveSectionClick = this.handleRemoveSectionClick.bind(this);
        this.handleSectionItemClick = this.handleSectionItemClick.bind(this);
        this.handleAddQuestionClick = this.handleAddQuestionClick.bind(this);
        this.handleQuestionNameChange = this.handleQuestionNameChange.bind(this);
        this.handleQuestionTypeChange = this.handleQuestionTypeChange.bind(this);
    }
    
    // Section Handlers

    // Updates state when a SectionItem is clicked
    handleSectionItemClick(currentSectionId) {
        this.setState({
            currentSectionId: currentSectionId
        });
    }

    // Updates state when a addSectionButton is clicked
    handleAddSectionClick() {
        let lastSectionId = this.state.lastSectionId + 1;
        let lastQuestionId = this.state.lastQuestionId + 1;
        let newSection = {
            id: lastSectionId,
            name: 'New Section',
            questions: [
                {
                    id: lastQuestionId,
                    name: "New Question",
                    questionType: "text"
                }
            ]
        }

        this.setState({
            sections: this.state.sections.concat(newSection),
            lastQuestionId: lastQuestionId,
            lastSectionId: lastSectionId
        });
    }
    // Updates state when a remove section is clicked.
    handleRemoveSectionClick(sectionId) {
        let lastSectionId = this.state.lastSectionId + 1;
        let lastQuestionId = this.state.lastQuestionId + 1;
        let newSections = this.state.sections;
        let indexToRemove = newSections.indexOf(newSections.find((section) => section.id === parseInt(sectionId)));
        newSections.splice(indexToRemove, 1);

        if(newSections.length == 0) {
            newSections = [{
                id: lastSectionId,
                name: 'New Section',
                questions: [
                    {
                        id: lastQuestionId,
                        name: "New Question",
                        questionType: "text"
                    }
                ]
            }]
        }
        this.setState({
            sections: newSections,
            currentSectionId: newSections[0].id,
            currentQuestionId: newSections[0].questions[0].id,
            lastQuestionId: lastQuestionId,
            lastSectionId: lastSectionId

        });
    }
    // Updates the state when the Section name changes. 
    handleSectionNameChange(sectionId, newName) {
        console.log(sectionId+'   '+ newName)
        let newSections = this.state.sections;
        newSections.find((section) => section.id === parseInt(sectionId)).name = newName;
        this.setState({
            sections: newSections
        });
    }


    //Question Handlers
    handleAddQuestionClick() {
        return;
    }

    handleQuestionNameChange(sectionId, questionId, newName) {

        let newSections = this.state.sections;
        newSections.find((section) => section.id === parseInt(sectionId))
            .questions.find((question) => question.id === parseInt(questionId)).name = newName;

        this.setState({
            sections: newSections
        });

    }

    handleQuestionTypeChange(sectionId, questionId, newType) {
        let newSections = this.state.sections;
        newSections.find((section) => section.id === parseInt(sectionId))
            .questions.find((question) => question.id === parseInt(questionId)).questionType = newType;

        this.setState({
            sections: newSections
        });
    }

    render() {
        return (
            <div>
                <SectionList 
                    currentSectionId={this.state.currentSectionId}
                    sections={this.state.sections}
                    onSectionItemClick={this.handleSectionItemClick}
                    editMode={this.state.editMode}
                    onAddSectionClick={this.handleAddSectionClick}
                    onSectionNameChange={this.handleSectionNameChange}
                    onRemoveSectionClick={this.handleRemoveSectionClick}
                />
                <QuestionList 
                    currentSectionId={this.state.currentSectionId}
                    currentQuestionId={this.state.currentQuestionId}
                    sections={this.state.sections}
                    editMode={this.state.editMode}
                    onQuestionNameChange={this.handleQuestionNameChange}
                    onQuestionTypeChange={this.handleQuestionTypeChange}
                />
            </div>
        );
    }
}
export default CustomForm;