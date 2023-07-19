import Head from "next/head";
import styled from "styled-components";


interface Props {
	title?: string;
	description?: string;
	keyword?: string;
	image?: string;
	uri?: string;
}

const SEO = ({
	title = '찾는차 다있다! 차란차 도이치오토월드',
	description = '세계 최대규모 자동차매매단지 도이치오토월드에서 인증된 중고차를 만나 보세요.',
	keyword = '차란차, 도이치오토월드, 차란차도이치오토월드, 중고차, 차란차중고차, 도이치중고차, 오토월드중고차, 도이치인증, 수입인증중고차, 브랜드인증, 중고차시세, 중고차매장, 중고차거래',
	image = 'https://www.charancha.com/mo/img/og.png',
	uri = 'https://www.charancha.com/'
}: Props) => {

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keyword} />
				<meta name="naver-site-verification" content="2f6ae6fe9dbfcc1c3c6cd63ad0308024424a074f" />

				<meta property="og:title" content={title} />
				<meta property="og:site_name" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:url" content={uri} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
			</Head>
			<A11YStyled>{title}</A11YStyled>
		</>
	)
}

export default SEO;

const A11YStyled = styled.h1`
    position: absolute; 
	clip: rect(1px, 1px, 1px, 1px); 
	-webkit-clip-path: inset(0px 0px 99.9% 99.9%); 
	clip-path: inset(0px 0px 99.9% 99.9%); 
	overflow: hidden; 
	height: 1px; 
	width: 1px; 
	padding: 0; 
	border: 0;
`;