import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useGetProductsQuery } from '../../API/Website';

export default function Home() {
    const { data: products, isError, isLoading } = useGetProductsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Box
                sx={{
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Welcome
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks
                        don&apos;t simply skip over it entirely.
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">Primary call to action</Button>
                        <Button variant="outlined">Secondary action</Button>
                    </Stack>
                </Container>
            </Box>
            <Container sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {products.products.data.map((product, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ 
                                    height: '100%', 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[100]
                                            : theme.palette.grey[900], 
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: '250px',
                                    }}
                                    image={product.image}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography>
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Add to cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}