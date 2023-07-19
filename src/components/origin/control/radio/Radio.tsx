import React from 'react';
import styled from "styled-components";
import { size, color } from "@styles/base"

interface Props {
	id: string;
	label: string;
	value: string;
	name: string;
	checked?: boolean;
	setRadio?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<Props> = ({
	id,
	label,
	name,
	value,
	checked,
	setRadio
}: Props) => {

	return (
		<RadioStyled htmlFor={id}>
			<input
				type={"radio"}
				id={id}
				name={name}
				value={value}
				onChange={setRadio}
				checked={checked}
			/>
			<span>{label}</span>
		</RadioStyled>
	)
}

const RadioStyled = styled.label`
    display: inline-flex;
	
	// input {
    //     position: absolute;
    //     clip: rect(1px, 1px, 1px, 1px); 
	// 	clip-path: inset(0px 0px 99.9% 99.9%);
    //     -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    //     overflow: hidden; 
	// 	width: 1px; 
	// 	height: 1px; 
	// 	padding: 0; 
	// 	border: 0;
	// }
	//
	// span {
    //     display: inline-flex;
    //     padding: 2px;
    //     border: 1px solid ${color.grayC2};
    //     background-color: ${color.white};
    //     border-radius: 2px;
    //     font-size: ${size.s14};
	// }
	
	input:checked + span {
		border-color: ${color.primary30};
		background-color: ${color.primary10};
		color: ${color.primary100};
	}
`

export default Radio;