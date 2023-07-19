import { weight, WeightProps } from "@styles/base"
import styled, { css } from "styled-components";

// base.tsx > weight 키 값과 동일
interface fontProps {
	weight?: WeightProps
}

const font = styled.h2<fontProps>`
    font-weight: ${ props => props.weight ? weight[props.weight] : '400' };
`

export const Heading1 = styled(font)`
	font-size: 32px;
	line-height: 48px;
`;

export const Heading2 = styled(font)`
	font-size: 28px;
	line-height: 42px;
`;

export const Title = styled(font)`
	font-size: 24px;
	line-height: 36px;
`;

export const SubTitle = styled(font)`
	font-size: 20px;
	line-height: 30px;
`;

export const Body1 = styled(font)`
	font-size: 16px;
	line-height: 24px;
`;

export const Body2 = styled(font)`
	font-size: 16px;
	line-height: 24px;
`;

export const Body3 = styled(font)`
	font-size: 14px;
	line-height: 20px;
`;

export const Caption1 = styled(font)`
	font-size: 12px;
	line-height: 18px;
`;

export const Caption2 = styled(font)`
	font-size: 10px;
	line-height: 16px;
`;

const typography = {
	Heading1,
	Heading2,
	Title,
	SubTitle,
	Body1,
	Body2,
	Body3,
	Caption1,
	Caption2
}

export default typography;
