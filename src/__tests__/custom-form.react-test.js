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

    // Remove the first section
    SectionListInstance.props.onRemoveSectionClick(0);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Remove the last section
    SectionListInstance.props.onRemoveSectionClick(1);

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Add a section

    SectionListInstance.props.onAddSectionClick()

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Get the section items
    let SectionItemInstances = SectionListInstance.findAllByType(SectionItem)

    // Change all the names of the sections
    SectionItemInstances.map((SectionItemIntance) => {
        SectionListInstance.props.onSectionNameChange(
            SectionItemIntance.props.section.id,
            'Some Random Name'
        );

        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    

    // Change the name of that section
});