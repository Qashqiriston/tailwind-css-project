import { robot } from "../../assets/logo"
import { styles } from "../../utils/style"
import Button from "../button/button"

const Home = () => {
  return (
    <section id="home"  className={`flex md:flex-row flex-col ${styles.paddingY}`}>
       {/* Animation image */}
       <div id="home" className={` flex-1 ${styles.flexStart} md:my-0 my-10`}> 
        <img src={robot} alt="robot" className="w-[100%] h-[100%] relative z-10 rounded-lg" />
      </div>

      {/* Information */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Discount Information */}
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          <p>⏫</p>
          <p className={`${styles.paragraph}`}>
            <span className="text-blue-400 ml-[10px]">20% </span> Chegirma <span className="text-blue-300">1 Oylik</span> Xisob Uchun
          </p>
        </div>

        {/* Title */}
        <div className="w-full"> 
          <h1 className={`${styles.heading1}`}> <span className="text-blue-100">Yangi Avlod</span>  <br /> <span className="text-gradient">To'lov Usuli</span></h1>
        </div>

        {/* Describtion */}
        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos illum vero iusto provident, eveniet odit ab cum illo assumenda!
        </p>

          {/* getting started */}
            <Button styles={'mt-4'} />

          {/* gradient backround */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[55%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient"></div>
        
      </div>

     
    </section>
  )
}

export default Home