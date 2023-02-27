import SideScroll from '@/components/sidescrollanimation/SideScroll';
import Locker from '@/components/locker/Locker';
//import styles
import styles from '../styles/PageNotFound.module.scss';

export default function PageNotFound() {
  return (
    <div className={styles.pagenotfound}>
      <h1>404 PAGE NOT FOUND</h1>
      <p>
              When it comes to me there is always a story, short story is... <br/>
              - I did see
        this on a webpage, and was like WOOAH, yeah thats cool, wasent a 404, but
        still effect was cool, so I looksy looksy on the internäääät, after 100 googles, YEAH! I found a similar tutorial result is this page. 
          </p>
          {/* <p>
          done by developer at a studio called 14islands, super cools stuff... here
        is the link for the tutorial
          </p>
      <a
        href='https://14islands.com/blog/interactive-marquee-with-framer-motion/'
        target='_blank'
      >
        Tutorial by Stefan Vitasovic
      </a> */}
          <Locker />
      <SideScroll />
    </div>
  );
}
