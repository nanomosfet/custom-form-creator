import React, { Component } from 'react';
import person from './icons/person.svg';

export default class PersonIcon extends Component {
	
    render() {
    	const imgStyle = {
			width: '20px',
			height: '20px',
			margin: '5px'
		}
    	return <img style={imgStyle} src={person} />;
    }
}