import React, {useState} from 'react'
import styles from '../style'
import { buttons } from '../constants'
import { Desktops, Mac1, Mac2, StudioD, StudioD2 } from '../components'


const Products = () => { 

    const [pressedButton, setPressedButton] = useState("laptops");

    const handlePress = (buttonId) => {
        setTimeout(() => {
            setPressedButton(buttonId === pressedButton ? null : buttonId);
          }, 300);
    };
    
    return (
    <section className={`md:pl-20 px-4 ${styles.paddingY}`}>
        <h1 className={`font-SF-Pro font-bold md:text-[55px] text-[28px] mt-[200px] pl-4 md:pl-0`}>Explore the lineup.</h1>
        <div>
            <ul className=' flex flex-row gap-2 mt-[100px] pl-4 md:pl-0'>
                {buttons.map((button) => (
                    <li key={button.id}
                        >
                        <button
                            style={{
                              backgroundColor: pressedButton === button.id ? 'black' : 'white',
                              color: pressedButton === button.id ? 'white' : 'black',
                            }}
                            onClick={() => handlePress(button.id)}
                            className='px-6 py-2 font-SF-Pro md:text-[18px] text-[12px] rounded-full'
                            >{button.name}</button>
                    </li>
                ))}
            </ul>
            <div className=' md:flex-row flex flex-col'>
            {pressedButton === 'laptops' ? (
            <>
              <Mac1 />
              <Mac2 />
            </>
            ) : null}
            {pressedButton === 'desktops' ? (
            <>
            <Desktops />
            </>
            ) : null}
          {pressedButton === 'display' ? (
            <>
              <StudioD />
              <StudioD2 />
            </>
            ) : null}
            </div>
        </div>
    </section>
  )
}

export default Products