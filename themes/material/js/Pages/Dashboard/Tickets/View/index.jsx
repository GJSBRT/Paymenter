import React from 'react';
import { Typography } from '@mui/material';
import { useGetTicketQuery } from '../../../../API/Client';
import { useParams } from 'react-router-dom';

export default function ViewTicket() {
    let { id } = useParams();
    const { data: ticket, isError, isLoading } = useGetTicketQuery(id);

    if (!ticket || isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Typography sx={{ mb: 2 }} variant="h4" component="h1">
                Ticket #{ticket.ticket.id}
            </Typography>


        </div>
    )
}
