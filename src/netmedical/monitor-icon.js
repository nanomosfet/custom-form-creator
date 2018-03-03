import React, { Component } from 'react';
import Monitor from './icons/monitor.png';

export default class MonitorIcon extends Component {
	render() {
		const Text = this.props.children;
		return (
			<span>
				<img src={Monitor} />
				<span
					style={
						{
							position: 'relative',
							left: '-21px',
							top: '0px',
							color: (this.props.color) ? this.props.color : 'black',
						}
					}
				>
					{Text}
				</span>
			</span>
		);
	}
}