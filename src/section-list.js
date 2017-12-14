import React, { Component } from 'react';
import SectionItem from './section-item.js'
{/* Displays all the section links from given data */}
class SectionList extends Component {
    constructor(props) {
        super(props);
        this.handleSectionItemClick = this.handleSectionItemClick.bind(this);
    }

    handleSectionItemClick(e) {
        this.props.onSectionItemClick(e.target.id);
        
    }

    render() {    
        const sections = this.props.sections.map((section) =>
            <SectionItem 
                key={section.id} 
                section={section}
                onClick={this.handleSectionItemClick}
            />
        );
        return (
            <section>
                <h4>Sections</h4>
                <ul>
                    {sections}
                </ul>
            </section>
        );
    }

}
export default SectionList;