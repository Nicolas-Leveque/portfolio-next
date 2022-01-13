import { useEffect } from 'react'
import AOS from 'aos'

import "aos/dist/aos.css"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: true,
      offset: 2000,
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
