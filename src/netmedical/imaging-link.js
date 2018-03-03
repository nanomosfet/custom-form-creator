import React, { Component } from 'react';
import MonitorIcon from './monitor-icon.js';

export default class ImagingLink extends Component {
	constructor(props) {
		super(props);
		this.handleImagingLinkClick = this.handleImagingLinkClick.bind(this);
	}

	handleImagingLinkClick(studyuid, vnum) {
		this.props.onImagingLinkClick(studyuid, vnum);	    
	}

	render() {
		return (<a 
					href="#"
					onClick={(e) => this.handleImagingLinkClick(this.props.studyuid, this.props.vnum)}
				>
					<MonitorIcon color={this.props.color}>{this.props.children}</MonitorIcon>
				</a>);
	}
}