import React, { Component } from 'react';

export default class CaseDoctorContacted extends Component {
    render() {
       const doctorContacted = this.props.doctorContacted;
       if(doctorContacted == "Yes") {
       		return (
               	<span>
               		Doctor Contacted: YES
               	</span>
            );
       	}
       	else {
       		return (
       			<span>Doctor Contacted: 
	       			<span
	       				style={
	       					{
	       						color:'red',
	       						fontWeight:'bold'
	       					}
	       				}
	       			>
	       				NO
	       			</span>
       			</span>
       		);
       	}
    }
}