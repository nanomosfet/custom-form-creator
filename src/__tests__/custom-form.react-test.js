import React from 'react';
import CustomForm from '../custom-form.js';
import SectionList from '../section-list.js';
import SectionItem from '../section-item.js';
import TestRenderer from 'react-test-renderer';

test('Custom Form renders correctly', () => {
    const component = TestRenderer.create(
        <CustomForm />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    let CustomFormInstance = component.root;

    // Get the SectionList component
    let SectionListInstance = CustomFormInstance.findByType(SectionList)

    let SectionItemInstances = SectionListInstance.findAllByType(SectionItem)
    // Remove all section items and check snapshot on each iteration.
    SectionItemInstances.map(SectionItemIntance => {
        SectionListInstance.props.onRemoveSectionClick(SectionItemIntance.id)

        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        
    });
    // Add a section

    SectionListInstance.props.onAddSectionClick()

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Get the section items
    SectionItemInstances = SectionListInstance.findAllByType(SectionItem)

    // Change all the names of the sections
    SectionItemInstances.map((SectionItemIntance) => {
        SectionListInstance.props.onSectionNameChange(
            SectionItemIntance.props.section.id,
            'Some Random Name'
        );

        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    SectionItemInstances.map((SectionItemIntance) => {
        SectionListInstance.props.onSectionItemClick(
            SectionItemIntance.props.section.id
        );

        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    

    
});