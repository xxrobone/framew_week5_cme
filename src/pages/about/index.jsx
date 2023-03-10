import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import IMGFANCY from '/public/images/tony_fancy.png'
import IMGJUDGE from '/public/images/tony_judge.png'
import { useMediaQuery } from '@/hooks/useMediaQuery'

// styles
import styles from './About.module.scss'

const About = () => {

  const desktop = useMediaQuery(768)

  return (
      <div className={styles.about}>
      <motion.div className={styles.img_wrapper} 
        initial={{scale: 0}}
        animate={{
          scale: 1,
          width: desktop ? '90vw' : '60%',
        height: desktop ? '40vh' : '55vh'}}
        transition={{duration: 0.6, delay: 0.8}}
      >
        <Image
          src={IMGJUDGE}
          alt="tony judge solo"
          fill
          priority
        />
      </motion.div>
      <motion.h2
        initial={{ y: 200, opacity: 0 }}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 1, delay: 1}}      
      >ABOUT</motion.h2>
      <motion.p
       initial={{opacity: 0 }}
       animate={{opacity: 1}}
       transition={{duration: 1.6, delay: 1.6}} 
      >
          Dancer and Choreographer Tony Go Go, co-founding member of the original Go Go Brothers, has preserved and developed the Go Go legacy since 1971 - the very beginning of sychronised Locking.
              <br />
              <br/>
              Originally from Watts, California, Tony Go Go started learning dance called Campbellocking, with his friends from High School (James &apos; OG Skeeter Rabbit&apos; Higgins, Edwin &apos;Buddy GoGo&apos;  Lombard, and Kevin YoYo ). They went to perform on  Soul Train and then formed a group called the Go Go Brothers.
              <br />
              <br />
              While dancing with his  partners (James &apos; OG Skeeter Rabbit&apos; Higgins, Edwin &apos;Buddy GoGo&apos; Lombard, and Kevin YoYo ) they formed another group by the name of Creative Generation - formed by The Watts Writers Workshop to develop talent around in Watts, Compton adn LA! Creative generation was the first unisex locking group. <br />
              Partners in that group were Arnetta Johnson, Lorna Dune, Greg Cambellock Jr, Jimmy Scooby-Doo Foster and Tony&apos;s fellow GoGo brothers ... But most of you remember Tony GoGo as a member of the Original Lockers with Don Campbell, Fluky Luke, Mr. Penguine, Shabba-Doo, and Slim The Robot.
      </motion.p>
      <motion.div className={styles.img_wrapper}
        animate={{
          scale: 1,
          width: desktop ? '60vw' : '30%',
          height: desktop ? '50vh' : '60vh'
        }}>
        <Image src={IMGFANCY}
          alt="tony in costume"
         fill
          priority
            />

      </motion.div>
 <p>
Since leaving the Original Lockers group in the early 1980s, Tony has taught and developed not only the original art of Locking in Japan but he recognised, created and developed a style that has by now become unique to the Asian style of Locking, sometimes refered to as &apos;Lock Fusion&apos;. Tony Go Go is now considered the innovator of the Japanese style of Locking.
<br/>
Being the only pioneer of Locking to reside in Japan, Tony has trained most Japanese Lockers who have gained international acclaim, but none more prominent than his two sons Yuu and Rei, better known as the Go Go Brothers of today. They have a strong synchronised locking background by which, one can tell, they learned from only the very best - Tony recalls, &apos;When Me, Skeet and Buddy got together in the early 70&apos;s we worked on steps over and over again, and that&apos;s the way I taught them&apos;. It doesn&apos;t come as a surprise then that Yuu and Rei started dancing around the same time they started walking. They trained in Locking and Tap Dance from a very early age, performing with their father on numerous occasions throughout Japan.
<br/>
Although Campbell can&apos;t lay claim to having the first Locking crew, that distinction belongs to Tony GoGo and the Go-Go, and Yo-Yo Brothers, Campbell&apos;s simply named group, The Lockers, can be considered the ones that spread the gospel of Locking all over the world.
          </p>
    </div>
  )
}

export default About