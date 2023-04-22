import { RestAPI } from "."

const ClientPrefix = "/api/client"
const ClientAPI = RestAPI.injectEndpoints({
    endpoints: (builder) => ({
        getTickets: builder.query({
            query: (req) => ({
                url: `${ClientPrefix}/v1/tickets`
            })
        }),
        getTicket: builder.query({
            query: (id) => ({
                url: `${ClientPrefix}/v1/tickets/${id}`
            })
        }),
    })
})

export const {
    useGetTicketsQuery,
    useGetTicketQuery,
} = ClientAPI