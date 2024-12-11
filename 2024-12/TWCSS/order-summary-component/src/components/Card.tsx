import React from 'react'
import largeImage from '../images/illustration-hero.svg'
import smallImage from '../images/icon-music.svg'

const longText:string = 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!';

function Card
() {
  return (
    <div className='h-3/4 w-3/4 bg-blue-500 border border-black rounded-2xl overflow-hidden grid grid-rows-3'>
        <div className='border border-black'>
            <img src={largeImage} />
        </div>
        <div className='flex flex-col items-center'>
            <span className='text-lg m-1'>Order Summary</span>
            <span className='text-sm text-center m-1 mt-3'>{longText}</span>
        </div>
        <div className='border border-black flex flex-col justify-between'>
            <div className='mx-4 border border-black rounded p-1 flex items-center justify-around'>
                <img className='h-8' src={smallImage} />
                <div className='flex flex-col'>
                    <span className='text-sm'>Annual Plan</span>
                    <span className='text-sm'>$59.99/year</span>
                </div>
                <span className='text-sm'>Change</span>
            </div>
            <div className='m-4 mt-0 flex flex-col text-sm'>
                <button className='border border-black rounded p-1'>Proceed to Payment</button>
                <button className='border border-black rounded p-1'>Cancel Order</button>
            </div>
        </div>
    </div>
  )
}

export default 
Card