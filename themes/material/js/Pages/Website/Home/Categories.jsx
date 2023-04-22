import React from 'react';
import { useGetCategoriesQuery } from '../../../API/Website';
import Alert from '../../../Components/Alert';
import Button from '../../../Components/Button';
import Spinner from '../../../Components/Spinner';

export default function() {
    const { data, isError, isLoading } = useGetCategoriesQuery();

    return(
        <div className='flex flex-col'>
            <h2 class="text-4xl font-bold dark:text-white mb-6">Categories</h2>
            {isLoading ?
                <Spinner className='mx-auto'/>
            :
                isError ?
                    <Alert type='error' message='An error occurred while loading the categories.'/>
                :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {data.categories.data.map((category, index) => {
                            return (
                                <div key={index} class="max-w-sm">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{category.name}</h5>
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400 h-12 mb-3">{category.description}</p>
                                    <Button to={`/categories/${category.id}`} className='flex w-fit my-auto'>
                                        Browse Category <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1 my-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
            }
        </div>
    )
}