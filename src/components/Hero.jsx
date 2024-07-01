import React from 'react'
import styles from '../style'
import {large} from '../assets'

const Hero = () => (
    <section className={`${styles.paddingY} ${styles.paddingX} flex flex-row md:flex-row`}>
        <div className='flex flex-col items-start'>
            <div className='flex flex-col md:flex-row md:justify-between w-full space-y-4 md:space-y-0 fade-up'>
                <h1 className='font-SF-Pro font-bold md:text-[80px] text-[50px]'>Mac</h1>
                <h1 className='font-SF-Pro font-bold md:text-[25px] text-[20px] md:pt-6'>If you can dream it, <br />Mac can do it.</h1>
            </div>
            <video src={large} className=' fade-delay rounded-[50px] mt-[90px] items-center flex delay-fade-up md:h-auto md:w-auto w-[360px] h-[640px] object-cover ' 
             autoPlay 
             muted 
             loop />
        </div>
    </section>
)


export default Hero