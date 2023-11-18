import React, { ChangeEvent } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import {SiEthereum} from 'react-icons/si'
import {BsInfoCircle} from 'react-icons/bs'

import Loader from './Loader'

const CommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

type InputProps = {
  placeholder: string
  name: string
  type: string
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void
}
const Input = ({placeholder, type, value, name, handleChange}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e, name)}
      name={name}
      step='0.0001'
      className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
      type={type} />
  )
}

export default function Welcome() {

  const connectWallets = () => {

  }

  const handleSubmit = () => {

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
            className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'
          >
            <p className='text-white text-base font-semibold'>Connect Wallets</p>
          </button>

          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10 '>
            <div className={`rounded-tl-2xl ${CommonStyles}`}>
              Reliability
            </div>
            <div className={CommonStyles}>
              Security
            </div>
            <div className={`rounded-tr-2xl ${CommonStyles}`}>
              Etherium
            </div>
            <div className={`rounded-bl-2xl ${CommonStyles}`}>
              WEB 3.0
            </div>
            <div className={CommonStyles}>
              Low fees
            </div>
            <div className={`rounded-br-2xl ${CommonStyles}`}>
              WEB 3.0
            </div>
          </div>
        </div>

        <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
          <div className='p-3 justify-center items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism'>
            <div className='flex justify-between flex-col w-full h-full '>
              <div className='flex justify-between items-start '>
                <div className='w-8 h-8 rounded-full border-2 border-white flex justify-center items-center'>
                  <SiEthereum fontSize={21} color='#fff' />
                </div>
                <BsInfoCircle fontSize={17} color='#fff' />
              </div>

              <div>
                <p className='text-white font-light text-sm'>
                  Address
                </p>
                <p className='text-white font-semibold text-lg'>
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
            <Input 
              placeholder='Address To' 
              name='addressTo'
              type='text'
              value=''
              handleChange={() => {}}
            />
            <Input 
              placeholder='Amount (ETH)' 
              name='amount'
              type='number'
              value='0'
              handleChange={() => {}}
            />
            <Input 
              placeholder='Keyword (Gif)' 
              name='keyword'
              type='text'
              value=''
              handleChange={() => {}}
            />
            <Input 
              placeholder='Enter message' 
              name='message'
              type='text'
              value=''
              handleChange={() => {}}
            />
            
            <div className='h-[1px] w-full bg-gray-400 my-2 '>
            </div>
            {false ? <Loader></Loader> : (
              <button
                type='button'
                className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'
                onClick={handleSubmit}
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
