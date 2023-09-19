import { logo } from "../assets/logo"
import { feedback } from "../utils/constanta"


const Feetback = ({content, name, title, ind}) => {
  return (
    <div id="clients" className={` flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer feadbackCard border ${ind !== feedback.length - 1 ? 'mr-0' : 'md:mr-0 sm:mr-0 mr-0'}`}>
      <img src={logo} alt="app" className=" w-[42px] h-[27px] object-contain " />
      <p className=" font-montserrat font-normal text-[18px] leading-[32px] text-white my-10 ">{content}</p>

      <div className=" flex flex-row ">
        <div className="w-[60px] h-[50px] flex justify-center items-center bg-slate-400 rounded-full bg-dark-gradient ">
          <p className="text-gradient text-[22px] font-semibold font-montserrat "> {name.split(' ').map(c=>c[0]).join('.').toUpperCase()} </p>
        </div>
        <div className=" flex flex-col ml-4 ">
          <h4 className=" font-montserrat font-semibold text-[20px] leading-[32px] text-white ">{name}</h4>
          <p className=" font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite ">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Feetback