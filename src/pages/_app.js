import '@/styles/globals.scss'
import { Poppins } from 'next/font/google'
import Layout from '@/components/layout/layout'
import { useState, useEffect } from 'react'

const poppins = Poppins({
  weight: ['400', '600', '800'],
  style: ['normal'],
  subsets: ['latin']
})


export default function App({ Component, pageProps }) {


/*   const { pathname } = useLocation();

  useEffect(() => {
    setActive(false); // Close the navigation panel
  }, [pathname]); */
  return (
    <Layout className={poppins.className}>
      <Component {...pageProps} />
    </Layout>
  
  )
}
