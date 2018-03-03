import './base.scss';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import CaseList from './netmedical/case-list.js';

const Cases = [
	{
		"statusdescription": "None",
		"links": "",
		"modalities": [],
		"receiverid": "3",
		"readingphysician": "Trapper John MD",
		"duration": "",
		"cameraready": "",
		"doctorcontacted": "",
		"filtertype": "Order",
		"studyuid": "12821",
		"imagingdata": "[{\"szseriesuid\": \"1.2.840.113619.2.334.3.2534061940.488.1519727208.101\", \"description\": \"CT HEAD WO CONTRAST\", \"studyuid\": \"1.2.840.113619.2.334.3.2534061940.488.1519727208.99\", \"casenumber\": \"2018-12815LWSH\", \"modality\": \"CT\"}]",
		"examtype": "Neurologist",
		"studydate": "2018-02-27",
		"read": "Archived",
		"imagecount": "",
		"completed": "",
		"firstopenedbydoctor": "",
		"patientid": "999999999",
		"seriesuid": "12821",
		"reason": "",
		"unitid": "45",
		"technician": "",
		"patientname": "test2 test2",
		"casenumber": "2018-12821NMXS",
		"created": "2018-02-27 18:07 MST",
		"studydescription": "",
		"studytype": "Consult",
		"xrexcases": "2018-12815LWSH",
		"urgency": "STAT"
	},
	{
		"statusdescription": "None",
		"links": "",
		"modalities": [],
		"receiverid": "3",
		"readingphysician": "Trapper John MD",
		"duration": "",
		"cameraready": "",
		"doctorcontacted": "",
		"filtertype": "Order",
		"studyuid": "12821",
		"imagingdata": "[{\"szseriesuid\": \"1.2.840.113619.2.334.3.2534061940.488.1519727208.101\", \"description\": \"CT HEAD WO CONTRAST\", \"studyuid\": \"1.2.840.113619.2.334.3.2534061940.488.1519727208.99\", \"casenumber\": \"2018-12815LWSH\", \"modality\": \"CT\"}]",
		"examtype": "Neurologist",
		"studydate": "2018-02-27",
		"read": "Archived",
		"imagecount": "",
		"completed": "",
		"firstopenedbydoctor": "",
		"patientid": "999999999",
		"seriesuid": "12821",
		"reason": "",
		"unitid": "45",
		"technician": "",
		"patientname": "test2 test2",
		"casenumber": "2018-12822NMXS",
		"created": "2018-02-27 18:07 MST",
		"studydescription": "",
		"studytype": "Consult",
		"xrexcases": "2018-12815LWSH",
		"urgency": "STAT"
	}
]
const UserType = "doctor";

ReactDOM.render(
  <CaseList 
  	Cases={Cases}
  	UserType={UserType}
  />, document.getElementById('root')
);

