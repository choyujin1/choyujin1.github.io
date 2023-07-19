import React, { useState } from "react";
import styled from "styled-components";
import { color } from "@styles/base";

interface Props {
	stepContents: React.ReactNode[];
	activeStep: number;
}
const Stepper = ({
	stepContents,
	activeStep,
}: Props) => {

	const getStepContent = (stepNumber: number) => {
		return stepContents[stepNumber]
	}

	return (
		<>
			<ProgressBarStyled width={100 / Number(stepContents.length) * (Number(activeStep) + 1)} />
			<span>
				{activeStep + 1}/{stepContents.length}
			</span>
			<div>
				{/*content*/}
				{getStepContent(activeStep)}
			</div>
		</>
	)
}

export default Stepper;

const ProgressBarStyled = styled.div<{ width: number }>`
	display: block;
	position: relative;
    width: 100%;
    height: 1px;
    background-color: ${color.grayC2};
	
	&:after {
		content:"";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
        width: ${props => props.width + '%' || '0px'};
		max-width: 100%;
        height: 100%;
        background-color: ${color.gray3C};
	}
`;