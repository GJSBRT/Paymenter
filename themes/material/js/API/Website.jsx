import { RestAPI } from "."

const WebsitePrefix = "/api/website"
const WebsiteAPI = RestAPI.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (req) => ({
                url: `${WebsitePrefix}/v1/products`
            })
        }),
        
        getLogo: builder.query({
            query: (req) => ({
                url: `${WebsitePrefix}/v1/theme/logo`
            })
        }),
    })
})

export const {
    useGetProductsQuery,

    useGetLogoQuery,
} = WebsiteAPI