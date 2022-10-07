import React from 'react'
import { Link } from 'react-scroll'

const Buttons = ({text,customClass,to,}) => {
  return (
    <>
    <Link to={to} smooth={true} className={`cursor-pointer rounded-md px-6 hover:border-[rgb(17,224,141)] h-max hover:text-[rgb(17,224,141)] w-fit p-2 ${customClass} justify-center items-center text-center text-[20px] border-2 border-white`}>{text}</Link>
    </>
  )
}

export default Buttons