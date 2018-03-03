import React, { Component } from 'react';
import ImagingLink from './imaging-link.js';
import ImagingPreviewLink from './imaging-preview-link.js';

export default class ImagingItem extends Component {
	render() {
		const { Case, UserType, onImagingLinkClick } = this.props;
		let imagingLinks = null;
		if(UserType == "doctor") {
			if(Case.xrexcases != "") {
				if(Case.imagingdata != null && Case.imagingdata != "") {
					try {
						const imagingData = JSON.parse(Case.imagingdata);
						if(imagingData.length>0) {
							imagingLinks = imagingData.map(imageData => (
								<div style={{paddingLeft:'18px'}} key={imageData.studyuid}>
									<ImagingLink
										studyuid={imageData.studyuid}
										vnum={0}
										color="blue"
										onImagingLinkClick={onImagingLinkClick}
									>
										1
									</ImagingLink>
									<ImagingLink
										studyuid={imageData.studyuid}
										vnum={1}
										color="green"
										onImagingLinkClick={onImagingLinkClick}
									>
										2
									</ImagingLink>
									<ImagingPreviewLink
										modality={imageData.modality}
										casenumber={imageData.casenumber}
									/>
									{imageData.modality} - {imageData.description}
								</div>
							));
						}
					}
					catch(err) {
						imagingLinks = <div>{err}</div>
					}
					return (
						<div>
							2. View Images
							{imagingLinks}
						</div>
					);
				}
			}
			else {
				return (
					<div>
						2. No Images Availible
					</div>
				);
			}
		}
	}
}