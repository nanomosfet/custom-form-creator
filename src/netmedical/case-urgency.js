import React, { Component } from 'react';
import MonitorIcon from './monitor-icon.js';

export default class CaseUrgency extends Component {	
	render() {
		const urgency = this.props.urgency;
		if(urgency == "STAT") {
			return (
				<span 
					style={
						{
							color:'red',
							fontWeight: 'bold'
						}
					}
				>
					STAT
				</span>
			);
		}
		else if(urgency=="") {
			return (
				<span>
					(Routine)
				</span>
			);
		}
		else if(urgency) {
			return (
				<span>
					{urgency}
				</span>
			);
		}
		else {
			return (<span></span>)
		}
	}

}