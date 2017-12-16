import React, { Component } from 'react';
import SectionItem from './section-item.js'
{/* Displays all the section links from given data */}
class SectionList extends Component {
    constructor(props) {
        super(props);
        this.handleSectionItemClick = this.handleSectionItemClick.bind(this);
        this.handleAddSectionClick = this.handleAddSectionClick.bind(this);
        this.handleSectionNameChange = this.handleSectionNameChange.bind(this);
    }

    handleSectionItemClick(e) {
        this.props.onSectionItemClick(e.target.id);
        
    }
    handleAddSectionClick(e) {
        this.props.onAddSectionClick();
    }
    handleSectionNameChange(e) {
        this.props.onSectionNameChange(e.target.id, e.target.value)
    }

    renderAddSectionButton() {
        if(this.props.editMode) {
            return (
                <button onClick={this.handleAddSectionClick}>
                    +
                </button>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {    
        const sections = this.props.sections.map((section) =>
            <SectionItem 
                key={section.id} 
                section={section}
                onClick={this.handleSectionItemClick}
                editMode={this.props.editMode}
                onSectionNameChange={this.handleSectionNameChange}
            />
        );
        
        return (
            <section>
                <h4>Sections</h4>
                <ul>
                    {sections}
                    {this.renderAddSectionButton()}
                </ul>
                
            </section>
        );
    }
}
export default SectionList;