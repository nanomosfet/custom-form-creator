import React, { Component } from 'react';
import MonitorIcon from './monitor-icon.js';

export default class ImagingPreviewLink extends Component {
	
	getPreviewUrl() {
		let page = "";
		switch(this.props.modality) {
			case 'CR':
	        case 'DX':
	        case 'OT':
	        case 'OP':
	            page = "xray";
	            break;
	        case 'CT':
	        case 'MR':
	            page = "ctmri"
	            break;
	        case 'US':
	            page = "us"
	            break;
		}
		return "/html5preview/"+page+".html?CaseNumber="+this.props.casenumber;
	}
	render() {
		return (<a 
					href={this.getPreviewUrl()}
					target={"preview_"+this.props.casenumber}
				>
					<MonitorIcon>P</MonitorIcon>
				</a>);
	}
}