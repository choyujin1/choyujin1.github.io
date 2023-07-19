import { Html, Head, Main, NextScript } from "next/document";
import RootStyleRegistry from "@libs/vendor/styled/RootStyleRegistry";

export default function Document() {
    return (
        <Html lang="ko">
            <Head />
            <body>
                <RootStyleRegistry>
                    <Main />
                    <NextScript />
                </RootStyleRegistry>
            </body>
        </Html>
    );
}
