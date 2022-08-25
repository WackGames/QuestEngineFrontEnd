// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

// import LogInModal from '../components/LogInModal'
export default function PassReset() {
  const [email, setEmail] = useState("")
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const router = useRouter();
  
  function emailSubmit(e) {
      e.preventDefault();
      console.log("HELLO THERE!")
  }
  useEffect(() => {
}, [])

  return (
    <div>
      <h1>Password Reset</h1>
      <form>
      <input onChange={(e) => setEmail(e.target.value)} type="email" />
      <button onClick={(e) => emailSubmit(e)}> Submit</button>
      </form>
    </div>
  )
}