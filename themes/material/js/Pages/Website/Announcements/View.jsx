import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAnnouncementQuery } from '../../../API/Website';
import Alert from '../../../Components/Alert';
import Spinner from '../../../Components/Spinner';

export default function ViewAnnouncement() {
    const { id } = useParams();
    const { data, isError, isLoading } = useGetAnnouncementQuery(id);

    if (isLoading) return <Spinner className='mx-auto'/>;
    if (isError) return <Alert type='error' message='An error occured while retriving this announcement'/>;

    return (
        <div className='max-w-screen-xl mx-auto flex flex-col w-full'>
            <h1 class="text-5xl font-extrabold dark:text-white mt-16 mx-auto">{data.announcement.title}</h1>

            <div className='w-full mt-16'>
                <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
                    {data.announcement.announcement}
                </p>
            </div>
        </div>
    )
}