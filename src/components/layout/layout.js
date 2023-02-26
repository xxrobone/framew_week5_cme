import Head from 'next/head';
import { useState } from 'react'
import { useEffect } from 'react';
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
      </Head>
      
      <Header>
        <Nav active={active} setActive={setActive}>
          {navData.map(({ title, path, cls, id }, i) => (
            <NavItem title={title} path={path} cls={cls} key={id} i={i} />
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
