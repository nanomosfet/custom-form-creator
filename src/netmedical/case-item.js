import React, { Component } from 'react';
import PersonIcon from './person-icon.js'
import ImagingItem from './imaging-item.js';
import PatientReceiverInfo from './patient-receiver-info.js';
import CaseDetails from './case-details.js';

export default class CaseItem extends Component {
    render() {
    	const { Case, UserType, onImagingLinkClick } = this.props;
        return (
        	<div
        		style={
        			{
        				boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)'
        			}
        		}
        	>
        		<h3><PersonIcon />{Case.patientname}</h3>
        		<div>
        			<div style={{paddingLeft: '32px'}}>
        				<div>
        					<b>{Case.examtype} {Case.studytype} | {Case.casenumber}</b>
        				</div>
        				<div style={{paddingLeft: '6px'}}>
        					<a href={'/reportviewer?studyUID='+Case.studyuid+"&seriesUID="+Case.seriesuid+"' target='_'"+Case.casenumber}>
        						1. <u>Write Report (Start Timer)</u>
        					</a>
        					<ImagingItem 
        						Case={Case}
        						UserType={UserType}
        						onImagingLinkClick={onImagingLinkClick}
        					/>
        					<PatientReceiverInfo 
        						receiverid={Case.receiverid}
        					/>
        					<CaseDetails 
        						Case={Case}
        					/>
        				</div>
        			</div>
        		</div>
        	</div>
        );
    }
}