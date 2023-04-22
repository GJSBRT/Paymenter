import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useGetTicketsQuery } from '../../../API/Client';
import { useNavigate } from "react-router-dom";

export default function Tickets() {
    const { data: tickets, isError, isLoading } = useGetTicketsQuery();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (tickets) {
            if (tickets.data) {
                tickets.data.slice(0, 4);
            }
        }
    }, [tickets])

    return (
        <div>
            <Typography sx={{ mb: 2 }} variant="h4" component="h1">
                Tickets
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='Tickets' size='medium'>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Priority</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(!tickets && isLoading) ?
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    Loading...
                                </TableCell>
                            </TableRow>
                            :
                            tickets.tickets.data.map((ticket, index) => (
                                <TableRow
                                    hover
                                    onClick={() => navigate(`/dashboard/tickets/${ticket.id}`)}
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">#{ticket.id}</TableCell>
                                    <TableCell align="right">{ticket.title}</TableCell>
                                    <TableCell align="right">{ticket.priority} priority</TableCell>
                                    <TableCell align="right">{ticket.status}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
