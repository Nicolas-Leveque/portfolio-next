import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from  '../components/Skills'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font flex flex-col justify-center items-center">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Mon portfolio créé avec nextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}
