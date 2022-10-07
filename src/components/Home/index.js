import React from 'react'
import Blob from '../Blob'
import Buttons from '../Buttons'

const Home = () => {
  return (
    <>
    <main name='home' className='main flex ml-52  flex '>
      <div className='flex-col gap-8 pt-28 flex text-white text-[60px]'>
      <h1 className="leading-none font-bold">Olá,<br/>meu nome é<br/><span className='leading-none text-[70px]'>Pedro</span> <span className=' leading-none font-extrabold text-[80px] text-[rgb(17,224,141)]'>Allan</span></h1>
      <p className="text-[30px] font-thin italic text-gray-200">web developer e programador.</p>
      <p></p>
      <div className='flex gap-12'>
      <Buttons to='contact' customClass={'mt-8'} text={'Entre em contato'}/>
      <Buttons to='about' customClass={'mt-8'} text={'Sobre'}/>
      </div>
      </div>
      <Blob/>
    </main>
    </>
  )
}

export default Home