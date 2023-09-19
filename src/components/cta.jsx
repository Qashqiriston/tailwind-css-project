import { styles } from "../utils/style"
import Button from "./button/button"

const CTA = () => {
  return (
    <div className={`flex ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow bg-dark-gradient`}>
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Xizmatlarni sinab ko`rish</h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-2`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque veritatis amet laboriosam non impedit minus omnis 
        </p>
      </div>
    
      <div className={`flex ${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button/>
      </div>  
    </div>
  )
}

export default CTA