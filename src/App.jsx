import Navbar from "./components/navbar/navbar"
import Home from "./components/home/home"
import { styles } from "./utils/style"
import Statistics from "./components/statistics/statistics"
import Contract from "./components/contract"
import Biling from "./components/biling"
import Business from "./components/business"
import CTA from "./components/cta"
import Testimonials from "./components/testimonials"
import Client from "./components/client"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.container}`}>
             <Navbar/>
         </div>
      </div>

      {/* Home */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
        <Home/>
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.container}`}>
             <Statistics/>
             <Contract/>
             <Biling/>
             <Business/>
             <Testimonials/>
             {<Client/>}
             <CTA/>
             <Footer/>
         </div>
      </div>
    </div>
  )
}