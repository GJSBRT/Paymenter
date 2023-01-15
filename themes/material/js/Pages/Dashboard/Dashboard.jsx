import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import { Typography, Card, CardHeader, Avatar, Grid } from '@mui/material';
import { useGetTicketsQuery } from '../../API/Client';
import { useGetUserQuery } from '../../API';

export default function Dashboard() {
    const { data: tickets, isError, isLoading } = useGetTicketsQuery();
    const { data: user, isError: userIsError, isLoading: userIsLoading } = useGetUserQuery();

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
                Dashboard
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{
                        maxWidth: 345,
                        mb: 2,
                    }}>
                        {(!user || userIsLoading) ?
                            <CardHeader
                            avatar={
                                <Avatar aria-label="User"/>
                            }
                            title='loading'
                        />
                            :
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="User">
                                        {user.user.name.charAt(0)}
                                    </Avatar>
                                }
                                title={user.user.name}
                                subheader={user.user.email}
                            />
                        }
                    </Card>
                </Grid>

                <Grid item xs={8}>
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
                </Grid>
            </Grid>
        </div>
    )
}
