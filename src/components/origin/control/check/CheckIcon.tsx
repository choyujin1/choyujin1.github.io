import React from 'react';
import styled from "styled-components";
import { size, color } from "@styles/base"

interface Props {
	id: string;
	label: string;
	name?: string;
	checked?: boolean;
	setCheckbox?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	children?: React.ReactNode;
}

const CheckIcon: React.FC<Props> = ({
	id,
	label,
	name,
	checked,
	setCheckbox,
	children
}: Props) => {

	return (
		<CheckIconStyled htmlFor={id}>
			<input
				type={"checkbox"}
				id={id}
				name={name}
				checked={checked}
				onChange={setCheckbox}
			/>
			<span>
				{children && children}
				{label}
			</span>
		</CheckIconStyled>
	)
}

const CheckIconStyled = styled.label`
    display: inline-flex;
	
	input {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px); 
		clip-path: inset(0px 0px 99.9% 99.9%);
        -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
        overflow: hidden; 
		width: 1px; 
		height: 1px; 
		padding: 0; 
		border: 0;
	}
	
	span {
		display: inline-flex;
		align-items: center;
        font-size: ${size.s14};
	}
	
	input:checked + span {
		color: ${color.primary100};
	}
`

export default CheckIcon;