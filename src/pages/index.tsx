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
        <title>Websocket Car</title>
        <meta name="description" content="Control an RC Car using this web interface!" />
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
