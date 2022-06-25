import {ThemeProvider} from '@emotion/react'
import type {AppProps}
from 'next/app'
import Footer from '../components/Footer/Footer'
import MainNavBar from '../components/Header/MainNavBar'
import {theme} from '../components/Mui/FontTheme'
import '../styles/Styles.css'
import '../styles/general.css'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToTopBtn from '../components/ScrollToTopBtn'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import gsap from 'gsap';
import {SessionProvider} from "next-auth/react"

function MyApp({
    Component,
    pageProps: {
        session,
        ...pageProps
    }
} : AppProps) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

     console.log('session: ', session)
    return (
        <ThemeProvider theme={theme}>
            <SessionProvider session={session}>

                <MainNavBar session={session}/>
                <Component th {...pageProps}/>
                <ScrollToTopBtn/>
                <Footer/>

            </SessionProvider>
        </ThemeProvider>
    )

}

export default MyApp
