import React from 'react'
import styled from '@emotion/styled'

import { 
	PrimaryFont, 
	SecondaryFont, 
	SectionBase,
	SectionContent,
	SectionLeftColumn,
	SectionRightColumn,
	SectionTextContent
 } from '../commonstyles'

import {
	TimelineDataFall, 
	TimelineDataWinter
	} from './timelinedata.js';

import TimelineItem from './timelineitem.js'

const Container = styled('div')`
	${SectionBase};
	font-size: 30pt;
	display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px 0;


    ::after {
    	background-color: #e17b77;
	    content: '';
	    position: absolute;
	    left: calc(50% - 2px);
	    width: 4px;
	    height: 100%;
    }
`;

const Schedule = () =>
	TimelineDataFall.length > 0 && (
		<Container>
			{TimelineDataFall.map((data, idx) => (
				<TimelineItem data = {data} key={idx} />
			))}
		</Container>
	);



export default Schedule