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
            ]
        }
    }

    render() {
        return(
            <CustomForm 
                sections={this.state.sections}
            />
        );

    }
}
