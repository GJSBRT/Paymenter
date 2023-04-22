import React from 'react';
import { useGetAnnouncementsQuery } from '../../../API/Website';
import Alert from '../../../Components/Alert';
import Button from '../../../Components/Button';
import Spinner from '../../../Components/Spinner';

export default function() {
    const { data, isError, isLoading } = useGetAnnouncementsQuery();

    return (
        <div className='max-w-screen-xl mx-auto flex flex-col'>
            <h1 class="text-5xl font-extrabold dark:text-white mt-16 mx-auto">Announcements</h1>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mt-4 mb-16 mx-auto">Browse our categories to find the perfect product for you.</p>

            <div className='mt-16 flex flex-col text-center'>
                {isLoading ?
                    <Spinner className='mx-auto'/>
                :
                    isError ?
                        <Alert type='error' message='An error occurred while loading the categories.'/>
                    :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
                            {data.announcements.data.map((announcement, index) => {
                                return (
                                    <div key={index} class="max-w-sm">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{announcement.title}</h5>
                                        <p class="text-base font-normal text-gray-500 dark:text-gray-400 h-12 mb-3 truncate">{announcement.announcement}</p>
                                        <Button to={`/announcements/${announcement.id}`} className='flex w-fit ml-auto mr-auto my-auto'>
                                            Read More <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1 my-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </Button>
                                    </div>
                                )
                            })}
                        </div>
                }
            </div>
            
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-32'>
                <article>
                    <h2 class="text-4xl font-bold dark:text-white mb-6">Read to launch?</h2>
                    <p class="text-lg font-normal text-gray-500 lg:text-xl my-4 dark:text-gray-400">Paymenter is an open source webshop solution for hosting companies. It's developed to provide an more easy way to manage your hosting company.</p>
                </article>
                <img src='https://cdn.discordapp.com/attachments/793611217213325332/1099424401147048066/undraw_Maker_launch_re_rq81.png'/>
            </section>
        </div>
    )
}