// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../../styles/ResetPasswordConfirm.module.scss'

import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

import ResetPasswordConfirmModal from '../../../components/ResetPasswordConfirmModal'

export default function PassReset() {
  const [password, setPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const router = useRouter();
  
  function emailSubmit(e) {
      e.preventDefault();
      console.log(router['query'].uid, router['query'].token)
  }
  useEffect(() => {
}, [])

  return (
    <div className={styles.container}>
      <ResetPasswordConfirmModal />
    </div>
  )
}