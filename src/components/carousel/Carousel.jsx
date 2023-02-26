import {useState} from 'react'
import Image from 'next/image'
import { imageData } from '@/assets/data/pageData'
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from 'react-icons/ri'

// styles
import styles from './Carousel.module.scss'

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const length = imageData.length

    const next = () => {
        setCurrent(current === length -1 ? 0 : current +1)
    }

    const prev = () => {
        setCurrent(current ===  0 ? length -1 : current -1)
    }
  return (
      <div className={styles.carousel}>
          <div className={styles.buttons}>
              <RiArrowLeftCircleLine onClick={prev}/>
              <RiArrowRightCircleLine onClick={next}/>
          </div>
          <div className={styles.inner}>
              {imageData.map(({ img, title, id }, i) => (
                  <div key={id} className={id === current ? 'show' : 'hide'}> 
                      {i === current && (
                          <div>
                              <p>{title}</p>
                          <Image
                                  src={img}
                                  alt={title}
                                  style={{objectFit: 'contain', objectPosition: 'top center', width: '80svw', height: '100%', margin: '0 10vw'}}
                              />   
                          </div>    
                      )}
                  </div>
              ))}
          </div>
          
    </div>
  )
}

export default Carousel