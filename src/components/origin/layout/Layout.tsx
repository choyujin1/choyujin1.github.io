import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import {color} from "@styles/base";
import { SubTitle } from "@components/origin/typography/typography";
import SEO from "@components/origin/seo/SEO";

interface LayoutProps {
	title?: string;
	children: React.ReactNode;
}
export default function Layout({
	title,
	children
}: LayoutProps){

	return (
		<>
			<SEO title={title} description={'차란차 홈서비스 신청'}/>
			<div>
				<HeaderStyled id="header">
					{title && <SubTitle weight={'w700'}>{title}</SubTitle>}
				</HeaderStyled>
				<MainStyled id="main">
					{children}
				</MainStyled>
			</div>
		</>
	)
}

const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	padding:0 16px;
	background-color: ${color.white};
`

const MainStyled = styled.main`
	display: block;
	padding-top: 50px;
    background-color: ${color.white};
`;