import React from 'react'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'

export default function Layout({ children }) {

  return (
    <div className={styles.layouts}>
        <Navbar />
      <main>{children}</main>
    </div>
  )
}
