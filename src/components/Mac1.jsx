import React from 'react'
import styles from '../style'
import { mac1 } from '../constants'
import { macBook, m2Chip } from '../assets'

const Mac1 = () => (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col fade-opacity`}>
        <img src={macBook} alt="mac13" className=' md:h-[217px] md:w-[437px] h-auto w-auto mt-[80px]' />
        <h1 className=' relative font-SF-Pro font-bold md:text-[28px] text-[20px] mt-20'>MacBook Air 13” and 15”</h1>
        <div>
            <ul className='items-center justify-center'>
                {mac1.map((mac1) => (
                    <li key={mac1.id}>
                        <p className=' mt-5 font-SF-Pro font-bold text-center md:text-[16px] text-[14px]'>{mac1.chip}</p>
                        <p className=' mt-5 text-center justify-center w-[300px]'>{mac1.p}</p>
                        <p className=' mt-5 font-SF-Pro font-bold text-center md:text-[16px] text-[14px]'>{mac1.price}</p>
                    </li>
                ))}
                <div className=' mt-20 items-center justify-center text-center mb-20'>
                    <button className=' bg-blue-600 text-white font-SF-Pro text-[16px] px-8 py-2 rounded-full'>Learn more</button>
                    <button className=' bg-white text-blue-600 font-SF-Pro text-[16px] px-10 py-2 rounded-full'>Buy &gt;</button>
                </div>
            </ul>
        </div>
        <div className="flex text-center items-center justify-center w-[300px] flex-col">
            <div className='flex flex-col items-center mt-14'>
                <h1 className=' font-SF-Pro font-bold text-[26px] text-center'>13.6” or 15.3”</h1>
                <p className=' text-[14px]'>Liquid Retina display with 500 nits of brightness and support for 1 billion colors</p>
            </div>
            <div className='flex flex-col items-center mt-14'>
                <img src={m2Chip} alt="m2chip" className='' />
                <p className=' text-[14px]'>Apple M2 or M3 chip</p>
            </div>
            <div className='flex flex-col items-center mt-14'>
                <p className=' text-[14px]'>Up to</p>
                <h1 className=' font-SF-Pro font-bold text-[26px] text-center'>18 hours</h1>
                <p className=' text-[14px]'>Battery life</p>
            </div>
            <div className='flex flex-col items-center mt-14'>
                <h1 className=' font-SF-Pro font-bold text-[26px] text-center'>4 Ports</h1>
                <p className=' text-[14px]'>2x Thunderbolt / USB 4, headphone jack, MagSafe</p>
            </div>
            <div className='flex flex-col items-center mt-14'>
                <h1 className=' font-SF-Pro font-bold text-[26px] text-center'>2.7 lb. or 3.3 lb.</h1>
                <p className=' text-[14px]'>Weight</p>
            </div>
        </div>
    </div>
    
  )

export default Mac1