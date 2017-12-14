import React, { Component } from 'react';
{/* Displays a single section link */}
class SectionItem extends Component {
    render() {
        return (
            <li onClick={this.props.onClick} id={this.props.section.id}>{this.props.section.name}</li>
        );
    }
}
export default SectionItem;