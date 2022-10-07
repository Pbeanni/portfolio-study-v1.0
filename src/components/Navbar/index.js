import React, { useRef } from 'react';
import { useState ,useEffect,} from 'react';
import { BsHouseFill, BsPersonFill, BsFillEnvelopeFill,BsFillDice1Fill,BsFillDice2Fill,BsFillDice3Fill } from "react-icons/bs";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
let [stat,setStat] = useState(0);
let [spyActive,setSpyActive] = useState(true);
const handleClick=(index)=>{
  setStat(index);
  setSpyActive(!spyActive);
  setTimeout(()=>setSpyActive(true),700)
 } 

  return (
    <div className='navbar fixed h-full w-[70px] text-[white] bg-[#193a3a] py-14 items-center flex flex-col justify-center translate-x-0 -translate-y-1/2 top-1/2'>
    <nav className='relative px-3 flex  flex-col gap-10  shadow-black/50'>
        <Link spy={true} onSetActive={spyActive ? ()=>setStat(0) : ()=>null} onClick={()=>handleClick(0)} to='home' smooth={true} className={`icon ${stat === 0 ? 'active-nav':''} cursor-pointer hover:text-[#11e08d] flex flex-col items-center justify-center relative gap-1`}><BsHouseFill className={`${stat === 0 ? 'svgiconmove svgicon ':''}`}/><span className={`text-center w-[70px] ${stat === 0 ? 'textMove':''} `}>Home</span></Link>
        <Link spy={true} onSetActive={spyActive ? ()=>setStat(1) : ()=>null} onClick={()=>handleClick(1)} to='about' smooth={true} className={`icon ${stat === 1 ? 'active-nav':''} cursor-pointer hover:text-[#11e08d] flex flex-col items-center justify-center relative gap-1`}><BsPersonFill className={`${stat === 1 ? 'svgiconmove svgicon ':''}`}/><span className={`text-center w-[70px] ${stat === 1 ? 'textMove':''} `}>Sobre</span></Link>
        <Link spy={true} onSetActive={spyActive ? ()=>setStat(2) : ()=>null} onClick={()=>handleClick(2)} to='projects' smooth={true} className={`icon ${stat === 2 ? 'active-nav':''} cursor-pointer hover:text-[#11e08d] flex flex-col items-center justify-center relative gap-1`}><BsFillDice1Fill className={`${stat === 2 ? 'svgiconmove svgicon ':''}`}/><span className={`text-center w-[70px] ${stat === 2 ? 'textMove':''} `}>Projetos</span></Link>
        <Link spy={true} onSetActive={spyActive ? ()=>setStat(3) : ()=>null} onClick={()=>handleClick(3)} to='contact' smooth={true} className={`icon ${stat === 3 ? 'active-nav':''} cursor-pointer hover:text-[#11e08d] flex flex-col items-center justify-center relative gap-1`}><BsFillEnvelopeFill className={`${stat === 3 ? 'svgiconmove svgicon ':''}`}/><span className={`text-center w-[70px] ${stat === 3 ? 'textMove':''} `}>Contato</span></Link>
        <div className= {`slider ml-11 bg-white h-[60px] w-[60px] rounded-full transition-all duration-500 absolute border-[#102525] -top-[18px] border-4   z-10 active-slider${stat} `} ></div>
    </nav>
    </div>
);
}

export default Navbar