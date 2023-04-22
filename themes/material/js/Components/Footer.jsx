import React from 'react';

export default function () {
    return (
        <footer class="bg-white dark:bg-gray-900 pt-32 mt-auto">
            <div class="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <div class="flex items-center">
                            <img src={window.ThemeData.logo} class="h-8 mr-3" alt="Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{window.ThemeData.name}</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Store</h2>
                            <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Categories</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" class="hover:underline">Products</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Announcements</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="/" class="hover:underline">{window.ThemeData.name}</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}