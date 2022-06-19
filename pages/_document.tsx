import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href={`https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&family=Raleway:wght@100;300;400;500;600;700&display=swap`}
                    rel="stylesheet"/> */}
                    
                <script
                    dangerouslySetInnerHTML={{
                    __html: ` UPLOADCARE_PUBLIC_KEY = '${process.env.NEXT_PUBLIC_UPLOADCARE_API_KEY}'; `
                }}></script>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}