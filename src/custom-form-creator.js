import React, { Component } from 'react';

import CustomForm from './custom-form.js';
import data from './data.js';

export default class CustomFormCreator extends Component {
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
                            id: 0,
                            name: "Patient Name",
                            questionType: "text",
                        },
                        {
                            id: 1,
                            name: "Patient Age",
                            questionType: "number"
                        }
                    ]
                }
            ],
            editMode: 1
        }
        this.handleAddSectionClick = this.handleAddSectionClick.bind(this);
        this.handleSectionNameChange = this.handleSectionNameChange.bind(this);
    }

    handleAddSectionClick() {
        var newSection = {
            id: this.state.sections.length,
            name: 'New Section',
            questions: [
                {
                    id: 0,
                    name: "New Question",
                    questionType: "text"
                }
            ]
        }

        this.setState({
            sections: this.state.sections.concat(newSection)
        });
    }

    handleSectionNameChange(sectionId, newName) {
        var newSections = this.state.sections;
        newSections.find((section) => section.id === parseInt(sectionId)).name = newName;
        this.setState({
            sections: newSections
        })
    }

    render() {
        return(
            <CustomForm 
                sections={this.state.sections}
                editMode={this.state.editMode}
                onAddSectionClick={this.handleAddSectionClick}
                onSectionNameChange={this.handleSectionNameChange}
            />
        );

    }
}
