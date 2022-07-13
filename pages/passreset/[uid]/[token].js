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

  const router = useRouter()
  function emailSubmit(event, val) {
    fetch('http://example.com/songs')
    .then(response => response.json())
    .then(data => {
      setData(data[0]["title"])
      console.log(data)})
    .catch(err => console.error(err));
    
    console.log(val)
  }
  useEffect(() => {
    fetch('http://127.0.0.1:8000/demo-quiz/', {
      method: 'GET', // or 'PUT'
      headers: {
        'order': 'id',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setData(data["results"])
      setLoading(false)

    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, [])

  return (
    <div>
      <h1>Password Reset</h1>
      <form>
      <input onChange={(e) => setEmail(e.target.value)} type="email" />
      <button onClick={(e) => emailSubmit(e, router.query)}> Submit</button>
      </form>
      {loading ? "" : data.map(val => {
        return <img src={val["img_url"]} alt="Rick Astley" />
      })}
    </div>
  )
}