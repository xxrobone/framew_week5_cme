import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
/* import { motion } from 'framer-motion'; */
import ScrollToTop from '@/utils/scrollToTop/ScrollToTop';
import Header from '../header/Header';
import Footer from '../footer/Footer';
/* import LogoSvg from '../logosvg/LogoSvg'; */
import Nav from '../nav/Nav';
import NavItem from '../nav/NavItem';
import { navData } from '@/assets/data/pageData';
import Socials from '../socials/Socials';
/* import { FiHome } from 'react-icons/fi'; */

// for home button animation
const variants = {
  notVisible: { opacity: 0, x: '-100%' },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  onHover: {
    originX: 0,
    scale: [1, 1.4, 1.2],
    rotate: [0, 10, -10, 0],
    transition: { type: 'spring', stiffness: 120 },
  },
  fly: {
    opacity: 1,
    scale: [1, 1, 1, 1, 1, 1, 1.4, 1.2, 1, 1, 1, 1],
    rotate: [0, 0, 0, 0, 0, 0, 360, 180, 0, 0, 0],
    x: [1, -2, 1, -1, 1, -1, 0, 200, 200, 300],
    y: [1, -1, 1, -1, 1, 0, 0, 0, -300, -300],
    /* x: [0, 2, 0, 2, 0, 10, 40, 100, 1000],
    y: [0, 0, 0, 0, 0, 0, 40, 100, 1000], */
    transition: { duration: 1, type: 'spring', stiffness: 120 },
  },
};

export default function Layout({ children }) {
  const [active, setActive] = useState(false);
  /* const [clicked, setClicked] = useState(false); */

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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff'></meta>
      </Head>

      <Header>
       {/*  <Link href='/'>
          <motion.div
            variants={variants}
            initial='notVisible'
            animate={clicked ? 'fly' : 'visible'}
            whileHover={variants.onHover}
            onDoubleClick={() => {
              setClicked((clicked) => !clicked);
            }}
          >
            <FiHome />
          </motion.div>
        </Link> */}

        <Nav active={active} setActive={setActive}>
          {navData.map(({ title, path, cls, id }, i) => (
            <NavItem
              title={title}
              path={path}
              cls={cls}
              key={id}
              i={i}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
          {/*  <LogoSvg /> */}
        </Nav>
      </Header>
      <ScrollToTop>
        <main>{children}</main>
      </ScrollToTop>
      <Socials />
      <Footer>
        &copy; Tony GoGo 2023 ||
        <Link
          href='https://robertwagar.se'
          target='_blank'
          rel='noreferrer noopener'
        >
          Developed by Rob-One
        </Link>
      </Footer>
    </>
  );
}
