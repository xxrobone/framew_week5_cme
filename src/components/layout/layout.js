import Head from 'next/head';
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router';
import ScrollToTop from '@/utils/scrollToTop/ScrollToTop';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import LogoSvg from '../logosvg/LogoSvg';
import Nav from '../nav/Nav';
import NavItem from '../nav/NavItem';
import { navData } from '@/assets/data/pageData';
import Socials from '../socials/Socials';

export default function Layout({ children }) {
    const [active, setActive] = useState(false);
    
    const { events } = useRouter();
    const closeMobileMenu = useCallback(() => {
      setActive(false);
    }, []);
  
    useEffect(() => {
      // subscribe to next/router event
      events.on('routeChangeStart', closeMobileMenu);
      return () => {
        // unsubscribe to event on unmount to prevent memory leak
        events.off('routeChangeStart', closeMobileMenu);
      };
    }, [closeMobileMenu, events]);

  return (
    <>
      <Head lang='en-EN'>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>
          Tony Gogo - A living locker legend | GoGo Brothers, Streetdance,
          HipHop, The Lockers,Campbellocking, Locking &amp; Locking pioneers
        </title>
        <meta property='og:type' content='website'></meta>
        <meta
          property='og:description'
          key='desc'
          content='Streetdance, HipHop, GoGo Brothers, The Lockers, Campbellocking, Locking &amp; Locking pioneers and history'
        />
        <meta
          property='og:title'
          content='Tony Gogo - Pioneer of the dance style locking'
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      
      <Header>
        <Nav active={active} setActive={setActive}>
          {navData.map(({ title, path, cls, id }, i) => (
            <NavItem title={title} path={path} cls={cls} key={id} i={i} closeMobileMenu={closeMobileMenu}/>
          ))}
         {/*  <LogoSvg /> */}
        </Nav>
      </Header>
        <ScrollToTop>
          <main>{children}</main>
        </ScrollToTop>
        <Footer />
    
    </>
  );
}
