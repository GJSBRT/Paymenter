import { RestAPI } from "."

const websitePrefix = "/api/website";
const WebsiteAPI = RestAPI.injectEndpoints({
    endpoints: (builder) => ({
        /* Products */
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
        getAnnouncement: builder.query({
            query: (id) => ({
                url: `${websitePrefix}/v1/announcements/${id}`
            })
        }),
    })
})

export const {
    useGetProductsQuery,
    useGetCategoriesQuery,

    useGetAnnouncementsQuery,
    useGetAnnouncementQuery,
} = WebsiteAPI