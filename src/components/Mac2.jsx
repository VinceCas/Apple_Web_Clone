import React from 'react'
import styles from '../style'
import { mac2 } from '../constants'
import { macBook, m3Chip } from '../assets'

const Mac2 = () => (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col fade-opacity`}>
        <img src={macBook} alt="mac13" className='md:h-[217px] md:w-[437px] h-auto w-auto mt-[80px]' />
        <h1 className=' relative font-SF-Pro font-bold md:text-[28px] text-[20px] mt-20'>MacBook Air 13” and 15”</h1>
        <div>
            <ul className='items-center justify-center'>
                {mac2.map((mac2) => (
                    <li key={mac2.id}>
                        <p className=' mt-5 font-SF-Pro font-bold text-center md:text-[16px] text-[14px]'>{mac2.chip}</p>
                        <p className=' mt-5 text-center justify-center w-[300px]'>{mac2.p}</p>
                        <p className=' mt-5 font-SF-Pro font-bold text-center md:text-[16px] text-[14px]'>{mac2.price}</p>
                    </li>
                ))}
                <div className=' mt-20 items-center justify-center text-center mb-20'>
                    <button className=' bg-blue-600 text-white font-SF-Pro text-[16px] px-8 py-2 rounded-full'>Learn more</button>
                    <button className=' bg-white text-blue-600 font-SF-Pro text-[16px] px-10 py-2 rounded-full'>Buy &gt;</button>
                </div>
                <div className="flex text-center items-center justify-center w-[300px] flex-col">
                    <div className='flex flex-col items-center mt-14'>
                        <h1 className=' font-SF-Pro font-bold text-[26px] text-center'>14.2” or 16.2”</h1>
                        <p className=' text-[14px]'>Liquid Retina display with 500 nits of brightness and support for 1 billion colors</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={m3Chip} alt="m2chip" className='flex flex-col items-center mt-14' />
                        <p className=' text-[14px]'>Apple M3, M3 pro, or M3 max chip</p>
                    </div>
                    <div className='flex flex-col items-center mt-14'>
                        <p className=' text-[14px]'>Up to</p>
                        <h1 className=' font-SF-Pro font-bold text-[26px] text-center'>22 hours</h1>
                        <p className=' text-[14px]'>Battery life</p>
                    </div>
                    <div className='flex flex-col items-center mt-14'>
                        <h1 className=' font-SF-Pro font-bold text-[26px] text-center'>7 Ports</h1>
                        <p className=' text-[14px]'>2x Thunderbol / USB 4 or 3x Thunderbolt 4, HDMI, SDXC, headphone jack, MagSafe</p>
                    </div>
                    <div className='flex flex-col items-center mt-14'>
                        <h1 className=' font-SF-Pro font-bold text-[26px] text-center'>3.4 lb. or 4.7 lb.</h1>
                        <p className=' text-[14px]'>Weight</p>
                    </div>
                </div>
            </ul>
        </div>
    </div>
  )

export default Mac2