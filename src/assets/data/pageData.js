import IMG1 from '/public/images/tony_history2.png';
import IMG2 from '/public/images/tony_history5.png';
import IMG3 from '/public/images/tony_history7.png';
import IMG4 from '/public/images/tony_history4.png';
import IMG5 from '/public/images/tony_history8.png';

const ytVid1 = '7GGETPlhSY0';
const ytVid2 = 'ukJLxTC86aI';
const ytVid3 = '5Ysep7NpBfI';

export const navData = [
  {
    title: 'home',
    path: '/',
    id: 1,
  },
  {
    title: 'about',
    path: '/about',
    id: 2,
  },
  {
    title: 'events',
    path: '/events',
    id: 3,
  },
  {
    title: 'contact',
    path: '/contact',
    id: 4,
  },
];

export const videoData = [
  {
    name: 'Winner of Juste Debout 2019',
    details: 'Tony won juste debout 2019 in the locking category',
    id: 1,
    vid: ytVid1,
    vtime: '268',
  },
  {
    name: 'JUDGE DEMO WDC 2017',
    details: 'Judge Demo at WDC Finals world dance colloseum',
    id: 2,
    vid: ytVid2,
    vtime: '5',
  },
  {
    name: 'The Lockers',
    details: 'Tony performing with the lockers on the ',
    id: 3,
    vid: ytVid3,
    vtime: '150',
  },
];

export const imageData = [
  {
    title: 'Tony',
    id: 1,
    img: IMG1,
  },
  {
    title: 'Chillin',
    id: 2,
    img: IMG2,
  },
  {
    title: 'Tony with The Lockers',
    id: 3,
    img: IMG3,
  },
  {
    title: 'Back in the days',
    id: 4,
    img: IMG4,
  },
  {
    title: 'Young and on the go',
    id: 5,
    img: IMG5,
  },
];
