import React, { Component } from 'react';
{/* Displays a single section link */}
class SectionItem extends Component {
    render() {
        if(this.props.editMode) {
            return (
                <li>
                    <input 
                        onClick={this.props.onClick}
                        id={this.props.section.id}
                        value={this.props.section.name}
                        onChange={this.props.onSectionNameChange}
                    />
                </li>
            );
        }
        else {
            return (
                <li onClick={this.props.onClick} id={this.props.section.id}>{this.props.section.name}</li>
            );
        }
            
    }
}
export default SectionItem;