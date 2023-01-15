import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

function getXSRF() {
    const name = "XSRF-TOKEN=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
}

export const RestAPI = createApi({
    reducerPath: 'RestAPI',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        credentials: "same-origin",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "X-XSRF-TOKEN": getXSRF(),
        }
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => `/api/client/v1/users`
        }),
        getCSRFCookie: builder.query({
            query: () => `/sanctum/csrf-cookie`
        }),
        loginUser: builder.mutation({
            query: (request) => ({
                url: `/login`,
                method: "POST",
                body: request
            })
        }),
    })
})

export const {
    useGetUserQuery,
    useGetCSRFCookieQuery,
    useLoginUserMutation,
} = RestAPI