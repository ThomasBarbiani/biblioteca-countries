import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <Box
        sx={{
            bgcolor: 'background.paper',
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
                Lista de Países
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Este website mostra todos os países do mundo!
            </Typography>
        </Container>
    </Box>
  )
}

export default Banner