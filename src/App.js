import React from 'react'
import Header from './components/Header'
import Motivation from './components/Motivation'
import Schedule from './components/Schedule'

export default function App () {
  return (
    <>
      <Header />
      <main>
        <Motivation />
        <Schedule />
      </main>
    </>
  )
}

