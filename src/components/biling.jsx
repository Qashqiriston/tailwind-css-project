import { app, google, social } from "../assets/logo"
import { layout, styles } from "../utils/style"

const Biling = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImageReverse}>
        <img src={social} alt="social" className="w-[100%] h-[100%] relative z-[5] " />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Hisob-kitob va facturial <br className='sm:block hidden'/> osongina boshqaring 
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur numquam a illum culpa, distinctio nisi sed? Eaque ducimus saepe sunt!
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={google} alt="google" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={app} alt="app" className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"/>
      </div>
      </div>
    </section>
  )
}

export default Biling