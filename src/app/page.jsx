import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png';

export default function Home() {
  return (
    <div className="">
      <Image width={500} height={500} src="https://images.pexels.com/photos/18111088/pexels-photo-18111088/free-photo-of-beach-vacation-people-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className={styles.img}/>
    </div>
  )
}
