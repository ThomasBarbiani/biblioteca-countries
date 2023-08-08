import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({currentItems}) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
        {currentItems && (
            <Grid container spacing={4}>
                {currentItems.map((countryData) => (
                    <Grid item key={countryData.cca2} xs={12} sm={6} md={3}>
                        <Link to={`/country/${countryData.cca3}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                                <CardMedia component="div" sx={{ pt: '56.25%', }} image={countryData.flag} />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {countryData.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        )}
    </Container>
  )
}

export default CountryCard