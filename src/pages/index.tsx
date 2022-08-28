import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Controls from '../components/Controls'
import Priority from '../components/Priority'

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Patato</title>
        <meta name="description" content="Developer?, Artist?, Animator?, I have no idea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>🔁 Websocket Car 🚗</h1>
        <div className="video">Web RTC Here</div>
        <Controls />
        <Priority />
      </main>
    </div>
  )
}

export default Home
