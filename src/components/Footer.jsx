import React from 'react';
import styles from '../style';
import { footerLinks } from '../constants';

const Footer = () => (
    <section className={`md:pl-20 px-4 ${styles.paddingY} mt-20`}>
        <h1 className='font-SF-Pro font-bold md:text-[55px] text-[28px]'>Mac</h1>
        <ol className='flex md:flex-row flex-col md:gap-10 gap-5 md:mt-20 mt-10'>
            {footerLinks.map((footerLink, index) => (
                <li key={index}>
                    <p className='text-[14px] text-gray-500'>{footerLink.title}</p>
                    <ul>
                        {footerLink.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <a href="#">
                                    <p className={`text-start text-wrap justify-start 
                                        ${index !== 0 ? 'md:text-[16px] text-[16px] font-semibold' : 'md:text-[30px] text-[20px] font-SF-Pro font-bold'}`}>
                                        {link}
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ol>
    </section>
);

export default Footer;
