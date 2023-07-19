import type { AppProps } from "next/app";
import Head from 'next/head';
import "@styles/reset.css";

import { ApolloProvider } from '@apollo/client';
import apollo from "@libs/client/apollo"
import SEO from "@components/origin/seo/SEO";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={apollo}>
            <SEO />
            <Component {...pageProps} />
        </ApolloProvider>
    );
}
