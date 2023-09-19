import { search } from "../assets/logo"
import { layout } from "../utils/style"
import { styles } from "../utils/style"
import Button from "./button/button"

const Contract = () => {
  return (
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Bir necha oson qadamda <br className='sm:block hidden' /> kontrakt tuzish</h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur numquam a illum culpa, distinctio nisi sed? Eaque ducimus saepe sunt!
      </p>
      <Button/>
    </div>
    <div className={layout.sectionImage}>
      <img src={search} alt="search" className="w-[100%] h-[100%] " />
    </div>
   </section>
  )
}

export default Contract