import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Hero from '@/components/Hero/Hero';
import Bio from '@/components/bio/Bio';
import Carousel from '@/components/carousel/Carousel';
import Video from '@/components/videoscomponent/Video';
import { videoData } from '@/assets/data/pageData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tony Gogo</title>
        <meta name='description' content='Official webpage of Tony Gogo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.home}>
        <motion.div
          className={`${styles.overlay} ${styles.first}`}
          initial={{}}
          animate={{
            height: 0,
          }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className={`${styles.overlay} ${styles.second}`}
          initial={{}}
          animate={{
            height: 0,
          }}
          transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className={`${styles.overlay} ${styles.third}`}
          initial={{}}
          animate={{
            height: 0,
          }}
          transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
        ></motion.div>
        <Hero />
        <Carousel />
        <Video>
          {videoData.map(({ vid, vtime, id }) => (
            <div key={id}>
              <iframe
              title='tony gogo'
              className={styles.video}
              type='text/html'
              src={`https://www.youtube-nocookie.com/embed/${vid}?start=${vtime}`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
          ></iframe>

            </div>
            ))}
        </Video>
        <div id='bio'>
          <Bio />
        </div>
      </main>
    </>
  );
}
