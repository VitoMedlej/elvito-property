import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>

            
                      <link rel="icon" href="https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg" />
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