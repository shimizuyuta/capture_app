import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";
import Screenshot from '../components/Screenshot';


// const videoConstraints = {
//   width: 720,
//   height: 360,
//   facingMode: "user"
// };




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Screenshot/>
    </div>
  )
}

export default Home
