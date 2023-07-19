import React from 'react';
import Icon from '@assets/icons/icon_check.svg';
import { color, ColorProps, size, SizeProps } from "@styles/base"


type Props = {
	iconSize : SizeProps;
	iconColor?: ColorProps;
}

const IconCheck = ({
	iconSize = 's16',
	iconColor = 'gray10'
}: Props) => {

	const w = size[iconSize];
	const c = color[iconColor];

	return (
		<Icon
			viewBox={"0 0 24 24"}
			style={{
				width: w,
				height: w
			}}
			fill={c}
			className={iconColor}
		/>
	);
};

export default IconCheck;
