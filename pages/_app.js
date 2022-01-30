import {useState,useEffect} from 'react'
import '../routes/CarouselLap/CarouselLap.css'
import '../routes/ClientCarousel/ClientCarousel.css'
import '../routes/ControlledCarousel/ControlledCarousel.css'
import '../routes/Home/Home.css'
import '../routes/Header/Header.css'
import '../routes/Footer/Footer.css'
import '../routes/NavBar/NavBar.css'
import '../routes/AboutPage/About.css'
import '../routes/ClientsPage/ClientPage.css'
import '../routes/CarrersPage/Careers.css'
import '../routes/Contactus/ContactUs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaAngleUp } from 'react-icons/fa'
import Header from '../routes/Header'
import Footer from '../routes/Footer'

function MyApp({ Component, pageProps }) {
  const [handelScroll, sethandelScroll] = useState()
  const scrolling = () => {
    const scroll = window.scrollY
    if (scroll > 200) {
      sethandelScroll(true)
    } else {
      sethandelScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrolling)
  }, [])
  const scrollup = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <div>
    {handelScroll && <div className="button-div" onClick={scrollup}>
      <i><FaAngleUp></FaAngleUp></i>
    </div>}
    <ToastContainer/>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp
