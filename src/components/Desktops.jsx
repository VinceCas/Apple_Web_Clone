import React from 'react'
import styles from '../style'
import { desktopConst, desktopSpecs } from '../constants'
import { m2o, m2u, m2us, m3 } from '../assets'

const Desktops = () => (
    <section className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} fade-opacity`}>
        <div className="scroll-container">
            <ul className="flex gap-[77px]">
                {desktopConst.map((desktopConst, index) => (
                    <li key={desktopConst.name} className="flex-shrink-0">
                        <img className={`h-auto w-auto 
                            ${index === 2 ? 'mt-[243px]' : 'mt-0'}
                            ${index === 1 ? 'mt-[279px]' : 'mt-0'}
                            ${index === 0 ? 'mt-[32px]' : 'mt-0'}`}
                            src={desktopConst.img} alt="" />
                        <div className='max-w-[310px] py-4'>
                            <h1 className='text-center font-SF-Pro font-bold md:text-[28px] text-[20px] mt-20'>{desktopConst.name}</h1>
                            <p className='mt-5 font-SF-Pro font-bold text-center md:text-[16px] text-[14px]'>{desktopConst.chip}</p>
                            <p className='mt-5 text-center justify-center w-[300px]'>{desktopConst.p}</p>
                            <p className='mt-5 font-SF-Pro font-bold text-center md:text-[16px] text-[14px]'>{desktopConst.price}</p>
                            <div className='mt-20 items-center justify-center text-center mb-20'>
                                <button className='bg-blue-600 text-white font-SF-Pro text-[16px] px-8 py-2 rounded-full'>Learn more</button>
                                <button className='bg-white text-blue-600 font-SF-Pro text-[16px] px-10 py-2 rounded-full'>Buy &gt;</button>
                            </div>
                            
                        </div>

                        
                    </li>
                ))}
                
            </ul>
            <ul className="flex flex-row space-x-24 justify-between">
                            {desktopSpecs.map((desktopSpecs, index) => (
                                <li key={desktopSpecs} >
                                    <div className={`flex flex-col text-center items-center justify-center w-[300px]
                                        ${ index === 1 || index === 2 || index === 3 ? ' mt-[42px]' : 'mt-0'}
                                        `}>
                                        <div className="flex flex-col items-center mt-14">
                                            <h1 className="font-SF-Pro font-bold text-[26px] text-center">{desktopSpecs.spec1}</h1>
                                            <p className="text-[14px]">{desktopSpecs.p1}</p>
                                        </div>
                                        <div className="flex flex-col items-center mt-14">
                                            <img src={desktopSpecs.spec2} alt="m2chip" className="" />
                                            <p className="text-[14px]">{desktopSpecs.p2}</p>
                                        </div>
                                        <div className="flex flex-col items-center mt-14">
                                            <h1 className="font-SF-Pro font-bold text-[26px] text-center">{desktopSpecs.spec3}</h1>
                                            <p className="text-[14px]">{desktopSpecs.p3}</p>
                                        </div>
                                        <div className={`flex flex-col items-center ${ index === 3 ? 'mt-[15px]' : 'mt-14'}`}>
                                            <p className="text-[14px]">Up to</p>
                                            <h1 className="font-SF-Pro font-bold text-[26px] text-center">{desktopSpecs.spec4}</h1>
                                            <p className="text-[14px]">{desktopSpecs.p4}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
        </div>
    </section>
)

export default Desktops
