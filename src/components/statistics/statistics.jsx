import { styles } from "../../utils/style"
import { statistics } from "../../utils/constanta"

const Statistics = () => {
  return (
    <div id='featuresx' className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {statistics.map(start =>(
        <div key={start.id} className = {`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] text-white "> {start.value} </h4>
          <p className="font-montserrat font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradient uppercase ml-3"> {start.title} </p>
        </div>
      ))}
    </div>
  )
}

export default Statistics