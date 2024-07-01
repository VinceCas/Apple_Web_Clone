import React from 'react'
import styles from '../style'
import { reasonConst } from '../constants'
import { close, plus } from '../assets'
import { useState } from 'react'
import PayPU from './PayPU'
import SavePU from './SavePU'
import CustomPU from './CustomPU'
import DeliverPU from './DeliverPU'
import ShopPU from './ShopPU'
import GetknowPu from './GetknowPu'
import StorePU from './StorePU'


const Reason = () => { 

    const ReasonCard = [
        <PayPU />,
        <SavePU />,
        <CustomPU />,
        <DeliverPU />,
        <ShopPU />,
        <GetknowPu />,
        <StorePU />
    ];

    const [modal, setModal] = useState(null);

    const toggleModal = () => {
        setModal(null);
    };
    
    
    return (
    <section className={`${styles.paddingY} md:pl-20 pl-8`}>
        <h1 className=' font-SF-Pro font-bold md:text-[55px] text-[28px] md:w-[600px] w-[300px] '>Why Apple is the best place to buy Mac.</h1>

        <div className=' scroll-container overflow-x-auto' style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none', 'overflow-y': 'hidden' }}>
            <ul className=' mt-16 flex flex-row gap-2 ' style={{ position: 'relative' }}>
                {reasonConst.map((reasonConst, index) => (
                    <a href="#" 
                        onClick={(e) =>{
                            e.preventDefault();
                            setModal(index);
                        }}
                        className='hover:scale-[102%] transition-transform duration-500 ease-in-out'
                        
                        >
                        <li
                            key={reasonConst.title}
                            className="flex-shrink-0 w-[350px] h-[350px] px-6 py-10" style={{ position: 'relative' }}>
                            <img src={reasonConst.img} alt="imgs" className=' justify-start items-start'/>
                            <h1 className= {` text-start font-SF-Pro font-bold text-[28px] mt-5 ${index === 3 || index === 6 ? 'w-[300px]' : 'w-[200px]' }`}>{reasonConst.title}</h1>
                            <p className=' text-start w-[300px] mb-0'>{reasonConst.p}</p>
                            <img src={plus} alt="plus_icon" className={`w-[40px] absolute right-3 ${ index === 3 ? ' mt-1' : ' mt-7 '}`}  />

                        </li>
                    </a>
                ))}

            </ul>

        </div>
        {modal !== null && (
        <button>
          <img
            src={close}
            alt="closeBTN"
            className={`fixed top-[2%] z-20 w-[18px] h-[18px] md:left-[80%] left-[90%] ${ modal === 6 ? 'md:top-[6%]' : 'md:top-[21%]'}`}
            onClick={toggleModal}
          />
        </button>
      )}
      {modal !== null && ReasonCard[modal]}
    </section>
  )
}

export default Reason