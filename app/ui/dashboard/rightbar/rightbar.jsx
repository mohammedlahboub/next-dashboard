import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const  Rightbar = () =>{
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.bgContainer}>
        <Image className={styles.bg} src="/astronaut.png" fill alt=""/>
      </div>
      <div className={styles.text}>
        <span className={styles.notification}>🔥 Available Now</span>
        <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
        <span className={styles.subtitle}>Takes 4 minutes to learn</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.   
          reiciendis beatae est facere quia, quis labore doloremque  </p>
        <p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </p>
      </div>
      </div>
      
      <div className={styles.item}>
      <div className={styles.text}>
        <span className={styles.notification}>🔥 Available Now</span>
        <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
        <span className={styles.subtitle}>Takes 4 minutes to learn</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.   
          reiciendis beatae est facere quia, quis labore doloremque  </p>
        <p>
          <button className={styles.button}>
            <MdReadMore/>
            Watch
          </button>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Rightbar
