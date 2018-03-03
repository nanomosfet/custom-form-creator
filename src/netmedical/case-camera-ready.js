import React, { Component } from 'react';

export default class CaseCameraReady extends Component {
    render() {
       const cameraReady = this.props.cameraReady;
       if(cameraReady == "Yes") {
       		return (
               	<span>
               		Camera Ready: YES
               	</span>
            );
       	}
       	else {
       		return (

       			<span>Camera Ready: 
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