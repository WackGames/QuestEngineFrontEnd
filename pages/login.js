import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LogInModal from '../components/LogInModal'
export default function LogIn() {
  return (
    <div className={styles.container}>
      <h1>Log In</h1>
      <LogInModal />
    </div>
  )
}
