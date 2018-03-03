import React, { Component } from 'react';
import CaseItem from './case-item.js'
export default class CaseList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewers: [null, null]
		}

		this.handleImagingLinkClick = this.handleImagingLinkClick.bind(this);
	}

	handleImagingLinkClick(studyuid, vnum) {
		const viewers = this.state.viewers;
		if(viewers[vnum]==null || viewers[vnum].closed==true) {
			viewers[vnum] = window.open("https://viewer2.netmedical.com/meddream/?file="+studyuid,"viewer"+vnum)
			this.setState({
				viewers: viewers
			});
	    }
	    else {
	    	viewers[vnum].location.replace("https://viewer2.netmedical.com/meddream/?file="+studyuid);
	    }
	    
	    	    		
	    
	}
	render() {
		const { Cases, UserType } = this.props;
		const caseItems = Cases.map(Case => (
			<CaseItem
				key={Case.casenumber}
				Case={Case}
				UserType={UserType}
				onImagingLinkClick={this.handleImagingLinkClick}
			/>
		));
		return (<div>{caseItems}</div>)
	}
}