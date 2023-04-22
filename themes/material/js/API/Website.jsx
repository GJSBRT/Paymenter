import { RestAPI } from "."

const websitePrefix = "/api/website";
const WebsiteAPI = RestAPI.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: `${websitePrefix}/v1/products`
            })
        }),

        /* Categories */
        getCategories: builder.query({
            query: () => ({
                url: `${websitePrefix}/v1/categories`
            })
        }),
        
        /* Annoucements */
        getAnnouncements: builder.query({
            query: () => ({
                url: `${websitePrefix}/v1/announcements`
            })
        }),
    })
})

export const {
    useGetProductsQuery,
    useGetCategoriesQuery,
    useGetAnnouncementsQuery
} = WebsiteAPI