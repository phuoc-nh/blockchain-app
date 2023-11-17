import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import {SiEthereum} from 'react-icons/si'
import {BsInfoCircle} from 'react-icons/bs'

import Loader from './Loader'


export default function Welcome() {

  const connectWallets = () => {
    
  }

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex md:flex-row items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start flex-col md:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Send crypto <br/> across the world
          </h1>
          <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
            Explore the crypto world.
            Buy and sell cryptocurrencies easily on crypto
          </p>
          <button 
            type='button'
            onClick={connectWallets}
          >

          </button>
        </div>
      </div>
    </div>
  )
}
