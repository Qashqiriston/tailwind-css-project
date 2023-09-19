import { useState } from "react"
import { button, logo, menu} from "../../assets/logo"
import { navLink } from "../../utils/constanta"
import { styles } from "../../utils/style"


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [active, setActive] = useState('home')
 
  const toggleHandler = () =>  setNav(prev => !prev)
  const activeHandler = id => setActive(id)
  
  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* logo */}
      <img src={logo} alt="logo" className='w-[75px] h-[55px]' />
      
      {/* navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
       {navLink.map((nav, inx)  => (
        <li key={nav.id}  className = {`
          ${inx === navLink.length -1 ? 'mr-0' : 'mr-10'} 
          ${active === nav.id ? 'text-blue-400' : 'text-white'}
        font-montserrat font-normal cursor-pointer text-[16px] text-blue-300 hover:text-blue-200 transition-all`} onClick = {() => activeHandler(nav.id)}>
            <a href={` #${nav.id}`}>{nav.title}</a>
        </li>
       ))}
      </ul>

      {/* navigation btn */}
      <div className={'sm:hidden flex flex-1 justify-end items-center z-[99]' }>
          <img src={nav ? button : menu } alt="nav"  className="w-[35px] h-[35px] object-contain bg-white" onClick={toggleHandler}/>
          <div className={`${!nav ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}>
            <ul className="list-none flex justify-center items-center flex-1 ">
                      {navLink.map((nav, inx)  => (
                  <li key={nav.id}  className = {`
                    ${inx === navLink.length -1 ? 'mr-0' : 'mr-10'} 
                    ${active === nav.id ? 'text-blue-400' : 'text-white'}
                  font-montserrat font-normal cursor-pointer text-[16px] text-blue-300 hover:text-blue-200 transition-all`} onClick = {() => activeHandler(nav.id)}>
                      <a href={` #${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar


// className = {`font-montserrat font-normal cursor-pointer text-[16px] text-white ${
//   inx === navLink.length -1 ? 'mr-0' : 'mr-10'} ${active === nav.id ? 'text-white' : 'text-lightWhite'} hover:text-white transition-all duration-500 `}