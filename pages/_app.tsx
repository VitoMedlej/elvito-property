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
import {createContext, useEffect, useLayoutEffect, useState} from 'react'
import { ISession } from '../src/Types'
import getCookie from '../src/Functions/getCookie'


export const Session = createContext < ISession > ({
    session: null,
    setSession: () => undefined
})

function MyApp({
    Component,
    pageProps: {

        ...pageProps
    }
} : AppProps) {
   
    const [session,
        setSession] = useState(null)
    useEffect(() => {
      
    const userSession = getCookie('user-session')
    if (userSession) {
        setSession(userSession)
    }
    }, [])
 
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    return (
        <ThemeProvider theme={theme}>
            <Session.Provider
                value={{
                session,
                setSession
            }}>

                <MainNavBar/>
                <Component th {...pageProps}/>
                <ScrollToTopBtn/>
                <Footer/>

            </Session.Provider>
        </ThemeProvider>
    )

}

export default MyApp

