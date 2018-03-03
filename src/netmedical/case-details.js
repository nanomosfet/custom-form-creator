import React, { Component } from 'react';
import CaseUrgency from './case-urgency.js';
import CaseCameraReady from './case-camera-ready.js';
import CaseDoctorContacted from './case-doctor-contacted.js';

export default class CaseDetails extends Component {
    render() {
        const Case = this.props.Case;
        return (
            <div
                style={
                    {
                        marginTop: '20px'
                    }
                }
            >
        	    <div>
                    <span>
                        <CaseUrgency urgency={Case.urgency} /> {Case.studydate} {Case.read}
                    </span>                    
                    
                </div>
                <div>
                    <CaseCameraReady cameraReady={Case.cameraReady} /> | <CaseDoctorContacted doctorContacted={Case.doctorcontacted} />
                </div>
                <div>
                    Created: {Case.created}
                </div>
            </div>
        );
    }
}