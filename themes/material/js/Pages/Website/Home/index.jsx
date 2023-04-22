import React from 'react';
import Button from '../../../Components/Button';
import Footer from '../../../Components/Footer';
import WebsiteNavbar from '../../../Components/WebsiteNavbar';
import Annoucements from './Annoucements';
import Categories from './Categories';

export default function Home() {
    return (
        <div className='mx-4 md:mx-0'>
            <div className='relative'>
                <div className='flex flex-col z-50 relative'>
                    <WebsiteNavbar/>
                    <div className='mx-auto max-w-screen-xl'>
                        <div className='flex flex-col text-center mx-auto md:w-3/4 py-32'>
                            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Start with <span class="text-indigo-500 dark:text-indigo-500">the world's #1</span> hosting provider.</h1>
                            <p className="text-lg font-normal text-gray-500 lg:text-xl my-4 dark:text-gray-400">Paymenter is an open source webshop solution for hosting companies. It's developed to provide an more easy way to manage your hosting company.</p>
                            <Button to='/register' className='mt-6 ml-auto mr-auto'>Get Started</Button>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-b from-indigo-50 to-transparent dark:from-indigo-900 w-full h-full absolute top-0 left-0 z-0"></div>
            </div>

            <div className='max-w-screen-xl grid grid-cols-1 gap-36 mx-auto'>
                <Categories/>

                <section className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <article>
                        <h2 class="text-4xl font-bold dark:text-white mb-6">Read to launch?</h2>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl my-4 dark:text-gray-400">Paymenter is an open source webshop solution for hosting companies. It's developed to provide an more easy way to manage your hosting company.</p>
                    </article>
                    <img src='https://cdn.discordapp.com/attachments/793611217213325332/1099424401147048066/undraw_Maker_launch_re_rq81.png'/>
                </section>

                <Annoucements/>
            </div>

            <Footer/>
        </div>
    )
}