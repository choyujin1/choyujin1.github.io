import styled from "styled-components";
import React, { InputHTMLAttributes, useState } from 'react';
import { size, color } from "@styles/base"

export interface Props extends InputHTMLAttributes<HTMLInputElement>{
	name: string;
	value?: string;
	setInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
	name,
	value,
	setInput,
	...rest
}: Props) => {

	const [focus, setFocus] = useState(false);

	const handleFocus = () => setFocus(true);
	const handleBlur = () => setFocus(false);

	return (
		<div className={ `${focus ? 'focus' : '' }` }>
			<input
				name={name}
				value={value}
				onChange={setInput}
				onFocus={handleFocus}
				onBlur={handleBlur}
				className={ `${focus ? 'focus' : '' }` }
				{...rest}
			/>
		</div>
	)
}

// const InputStyled = styled.input`
// 	border: 0;
// 	border-bottom: 2px solid ${color.grayC2};
// 	font-size: ${size.s14};
// 	background-color: ${color.white};
//
// 	&:focus{
// 		outline: 0;
// 		border-bottom-color: ${color.gray10};
// 	}
// `;
//

export default Input;