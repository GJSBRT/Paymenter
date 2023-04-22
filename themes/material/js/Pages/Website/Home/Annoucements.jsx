import React from 'react';
import { useGetAnnouncementsQuery } from '../../../API/Website';
import Alert from '../../../Components/Alert';
import Button from '../../../Components/Button';
import Spinner from '../../../Components/Spinner';

export default function () {
    const { data, isError, isLoading } = useGetAnnouncementsQuery();

    return (
        <div className='flex flex-col'>
            <h2 class="text-4xl font-bold dark:text-white mb-6">Announcements</h2>
            <ol class="items-center sm:flex">
                {isLoading ?
                    <Spinner className='mx-auto'/>
                :
                    isError ?
                        <Alert type='error' message='An error occurred while loading announcements.'/>
                    :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {data.announcements.data.map((announcement, index) => {
                                if (index > 2) return;

                                return (
                                    <li class="relative mb-6 sm:mb-0" key={index}>
                                        <div class="flex items-center">
                                            <div class="z-10 flex items-center justify-center w-2 h-2 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
                                            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                        </div>
                                        <div class="mt-3 sm:pr-8">
                                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{announcement.title}</h3>
                                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on {new Date(announcement.created_at).toLocaleDateString()}</time>
                                            <p class="text-base font-normal text-gray-500 dark:text-gray-400 h-12">{announcement.announcement}.</p>
                                        </div>
                                        <Button to={`/announcements/${announcement.id}`} className='flex w-fit my-auto mt-4'>Read More</Button>
                                    </li>
                                )
                            })}
                        </div>
                }
            </ol>
        </div>
    )
}